(function () {
  "use strict";

  var PROJETOS = window.PROJETOS_PORTFOLIO || [];
  var CATEGORIAS = window.CATEGORIAS_PORTFOLIO || [];
  var TOUR = window.TOUR_PORTFOLIO || [];

  // A grade principal mostra tudo, menos os Reels; eles têm a própria aba logo abaixo.
  var PRINCIPAIS = PROJETOS.filter(function (p) { return p.categoria !== "reels"; });
  var REELS = PROJETOS.filter(function (p) { return p.categoria === "reels"; });

  var gradeEl = document.getElementById("grade");
  var filtrosEl = document.getElementById("filtros");
  var reelsGradeEl = document.getElementById("reelsGrade");
  var casoEl = document.getElementById("caso");
  var casoJanelaEl = document.getElementById("casoJanela");
  var tituloHorizontalEl = document.getElementById("tituloHorizontal");
  var tituloVerticalEl = document.getElementById("tituloVertical");
  var maisEl = document.getElementById("gradeMais");
  var botaoMaisEl = document.getElementById("botaoMais");
  var botaoMaisTexto = document.getElementById("botaoMaisTexto");
  var reelsMaisEl = document.getElementById("reelsMais");
  var botaoMaisReelsEl = document.getElementById("botaoMaisReels");
  var botaoMaisReelsTexto = document.getElementById("botaoMaisReelsTexto");

  var TEXTOS_EN = window.TEXTOS_EN || {};
  var UI = window.TEXTOS_UI;
  var idioma = "pt";

  var LIMITE_INICIAL = 6;
  var LIMITE_REELS = 5;
  var categoriaAtiva = "todos";
  var clienteAtivo = "todos";
  var clienteReelsAtivo = "todos";
  var expandido = false;       // horizontais
  var expandidoReels = false;  // verticais
  var listaPrincipal = PRINCIPAIS.slice();
  var listaReels = REELS.slice();

  var modalLista = [];
  var modalIdx = -1;
  var modoTour = false;
  var passoTour = 0;
  var elementoAntesDoModal = null;

  /* ---------- Utilidades ---------- */
  function t(chave) { return UI[idioma][chave]; }
  // Texto de um projeto no idioma ativo; sem tradução, cai no português.
  function campo(p, nome) {
    return idioma === "en" && p.en && p.en[nome] ? p.en[nome] : p[nome];
  }
  function nomeDaCategoria(cat) { return idioma === "en" && cat.nomeEn ? cat.nomeEn : cat.nome; }
  function nomeCategoria(id) {
    for (var i = 0; i < CATEGORIAS.length; i++) if (CATEGORIAS[i].id === id) return nomeDaCategoria(CATEGORIAS[i]);
    return "";
  }
  function pad(n) { return n < 10 ? "0" + n : String(n); }
  function porId(id) {
    for (var i = 0; i < PROJETOS.length; i++) if (PROJETOS[i].id === id) return PROJETOS[i];
    return null;
  }
  function criar(tag, classe, html) {
    var el = document.createElement(tag);
    if (classe) el.className = classe;
    if (html != null) el.innerHTML = html;
    return el;
  }
  function escapar(txt) {
    return String(txt).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function clientesDe(lista) {
    var vistos = {}, saida = [];
    lista.forEach(function (p) { if (!vistos[p.cliente]) { vistos[p.cliente] = true; saida.push(p.cliente); } });
    return saida.sort(function (a, b) { return a.localeCompare(b, "pt-BR"); });
  }
  function embedUrl(p) {
    return "https://www.youtube-nocookie.com/embed/" + p.youtubeId + "?autoplay=1&rel=0&modestbranding=1&playsinline=1&hl=" + (idioma === "en" ? "en" : "pt-BR");
  }

  /* ---------- Grade principal: tipo de trabalho + cliente ---------- */
  function montarFiltros() {
    filtrosEl.innerHTML = "";
    var itens = [{ id: "todos", nome: t("todos") }].concat(CATEGORIAS);
    itens.forEach(function (cat) {
      var qtd = cat.id === "todos" ? PROJETOS.length : PROJETOS.filter(function (p) { return p.categoria === cat.id; }).length;
      if (cat.id !== "todos" && qtd === 0) return;
      var btn = criar("button", "filtro", escapar(nomeDaCategoria(cat)) + " <small>" + pad(qtd) + "</small>");
      btn.type = "button";
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", cat.id === categoriaAtiva ? "true" : "false");
      btn.dataset.categoria = cat.id;
      btn.addEventListener("click", function () { categoriaAtiva = cat.id; recarregarPrincipal(); });
      filtrosEl.appendChild(btn);
    });

  }

  function recarregarPrincipal() {
    Array.prototype.forEach.call(filtrosEl.children, function (b) {
      b.setAttribute("aria-selected", b.dataset.categoria === categoriaAtiva ? "true" : "false");
    });
    expandido = false;
    expandidoReels = false;
    montarGrade();
  }

  function criarCard(p, indiceAnimacao) {
    var card = criar("button", "card");
    card.type = "button";
    card.style.setProperty("--i", indiceAnimacao);
    card.dataset.id = p.id;
    card.setAttribute("aria-label", t("abrirCase") + campo(p, "titulo"));
    card.dataset.rotulo = p.youtubeId ? t("assistir") : t("ver");
    card.innerHTML =
      '<div class="card-moldura">' +
        (p.destaque ? '<span class="card-selo">' + t("destaque") + '</span>' : "") +
        (p.youtubeId ? '<span class="card-play" aria-hidden="true"></span>' : "") +
        '<div class="img"><img src="' + p.capa + '" alt="" loading="lazy"></div>' +
      '</div>' +
      '<div class="card-legenda">' +
        '<span class="card-num">' + pad(PRINCIPAIS.indexOf(p) + 1) + '</span>' +
        '<h3>' + escapar(campo(p, "titulo")) + '</h3>' +
        '<span class="card-formato">' + escapar(campo(p, "formato")) + '</span>' +
      '</div>';
    card.addEventListener("click", function () { abrirCaso(p.id, false); });
    ligarCursorCard(card);
    return card;
  }

  function montarGrade() {
    var soReels = categoriaAtiva === "reels";
    listaPrincipal = soReels ? [] : PRINCIPAIS.filter(function (p) {
      return categoriaAtiva === "todos" || p.categoria === categoriaAtiva;
    });
    gradeEl.hidden = soReels;
    // Os títulos "Horizontal" e "Vertical" só aparecem na vista de todos os vídeos.
    tituloHorizontalEl.hidden = categoriaAtiva !== "todos";
    tituloVerticalEl.hidden = categoriaAtiva !== "todos";
    gradeEl.innerHTML = "";
    if (!listaPrincipal.length && !soReels) {
      gradeEl.appendChild(criar("p", "vazio", t("vazio")));
    }
    var inicial = expandido ? listaPrincipal : listaPrincipal.slice(0, LIMITE_INICIAL);
    inicial.forEach(function (p, i) { gradeEl.appendChild(criarCard(p, i)); });
    montarReels();
    atualizarBotoesMais();
  }

  /* Cada grupo tem o próprio "+": horizontais logo abaixo da grade, verticais logo abaixo dos Reels. */
  function atualizarBotoesMais() {
    var restPrincipal = Math.max(0, listaPrincipal.length - LIMITE_INICIAL);
    maisEl.hidden = restPrincipal === 0;
    botaoMaisEl.setAttribute("aria-expanded", expandido ? "true" : "false");
    botaoMaisEl.classList.toggle("aberto", expandido);
    botaoMaisTexto.textContent = expandido ? t("mostrarMenos") : t("verMais")(restPrincipal);

    var restReels = categoriaAtiva === "todos" ? Math.max(0, REELS.length - LIMITE_REELS) : 0; // "Redes sociais" já mostra todos
    reelsMaisEl.hidden = restReels === 0;
    botaoMaisReelsEl.setAttribute("aria-expanded", expandidoReels ? "true" : "false");
    botaoMaisReelsEl.classList.toggle("aberto", expandidoReels);
    botaoMaisReelsTexto.textContent = expandidoReels ? t("mostrarMenos") : t("verMais")(restReels);
  }

  function alternarExpansao() {
    expandido = !expandido;
    montarGrade();
    if (!expandido) document.getElementById("trabalhos").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function alternarExpansaoReels() {
    expandidoReels = !expandidoReels;
    montarGrade();
    if (!expandidoReels) tituloVerticalEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function montarReels() {
    var mostrar = categoriaAtiva === "todos" || categoriaAtiva === "reels";
    reelsGradeEl.hidden = !mostrar;
    listaReels = mostrar ? REELS.slice() : [];
    reelsGradeEl.innerHTML = "";
    (expandidoReels || categoriaAtiva === "reels" ? listaReels : listaReels.slice(0, LIMITE_REELS)).forEach(function (p, i) {
      var card = criar("button", "reel");
      card.type = "button";
      card.style.setProperty("--i", i);
      card.dataset.id = p.id;
      card.dataset.rotulo = t("assistir");
      card.setAttribute("aria-label", t("assistirAria") + campo(p, "titulo"));
      card.innerHTML =
        '<div class="reel-moldura">' +
          '<img src="' + p.capa + '" alt="" loading="lazy">' +
          '<span class="reel-tipo">' + escapar(campo(p, "formato")) + '</span>' +
          '<span class="reel-play" aria-hidden="true"></span>' +
        '</div>' +
        '<div class="reel-legenda"><strong>' + escapar(campo(p, "titulo")) + '</strong></div>';
      card.addEventListener("click", function () { abrirCaso(p.id, false); });
      ligarCursorCard(card);
      reelsGradeEl.appendChild(card);
    });
  }

  /* ---------- Visualizador de case ---------- */
  /* Textos do visualizador no idioma ativo (separado do player para trocar o idioma sem reiniciar o vídeo). */
  function preencherTextosCaso(p) {
    document.getElementById("casoCategoria").textContent = nomeCategoria(p.categoria) + " · " + campo(p, "formato");
    document.getElementById("casoTitulo").textContent = campo(p, "titulo");
    document.getElementById("casoCliente").textContent = campo(p, "cliente");
    document.getElementById("casoIdeia").textContent = campo(p, "ideia");

    var papelBloco = document.getElementById("casoPapelBloco");
    if (p.meuPapel) {
      document.getElementById("casoPapel").textContent = campo(p, "meuPapel");
      papelBloco.hidden = false;
    } else {
      papelBloco.hidden = true;
    }

    var ferramentas = document.getElementById("casoFerramentas");
    ferramentas.innerHTML = "";
    (p.ferramentas || []).forEach(function (nome) { ferramentas.appendChild(criar("li", "", escapar(nome))); });
    ferramentas.previousElementSibling.hidden = !(p.ferramentas && p.ferramentas.length);
  }

  function preencherCaso(p, posicao, total) {
    preencherTextosCaso(p);

    var linkBehance = document.getElementById("casoBehance");
    var linkYoutube = document.getElementById("casoYoutube");
    linkBehance.hidden = !p.behance;
    if (p.behance) linkBehance.href = p.behance;
    linkYoutube.hidden = !p.youtubeId;
    if (p.youtubeId) linkYoutube.href = "https://www.youtube.com/watch?v=" + p.youtubeId;
    document.getElementById("casoContador").textContent = pad(posicao) + " / " + pad(total);

    var midia = document.getElementById("casoMidia");
    midia.style.setProperty("--fundo", 'url("' + p.capa + '")');
    midia.classList.toggle("vertical", !!p.vertical);
    var imagem = document.getElementById("casoImagem");
    imagem.innerHTML = "";
    if (p.youtubeId && location.protocol !== "file:") { // o YouTube recusa o player (erro 153) quando a página é aberta como arquivo
      var f = document.createElement("iframe");
      f.src = embedUrl(p);
      f.allow = "autoplay; encrypted-media; fullscreen; picture-in-picture";
      f.allowFullscreen = true;
      f.referrerPolicy = "strict-origin-when-cross-origin";
      f.title = campo(p, "titulo") + " — " + campo(p, "cliente");
      imagem.appendChild(f);
    } else {
      var img = document.createElement("img");
      img.src = p.capa; img.alt = t("capaDe") + campo(p, "titulo");
      imagem.appendChild(img);
    }

    var info = document.getElementById("casoInfo");
    info.scrollTop = 0;
    Array.prototype.forEach.call(info.children, function (c) { c.style.animation = "none"; void c.offsetWidth; c.style.animation = ""; });
  }

  function atualizarNavegacao() {
    var tourEl = document.getElementById("casoTour");
    var prox = document.getElementById("casoProximoTexto");
    var ant = document.getElementById("casoAnterior");
    if (modoTour) {
      tourEl.hidden = false;
      tourEl.textContent = t("tour")(passoTour + 1, TOUR.length);
      ant.style.visibility = passoTour === 0 ? "hidden" : "visible";
      prox.textContent = passoTour === TOUR.length - 1 ? t("terminarTour") : t("proximaTour");
    } else {
      tourEl.hidden = true;
      ant.style.visibility = "visible";
      prox.textContent = t("proxima");
    }
  }

  function abrirCaso(id, comoTour, passo) {
    var p = porId(id);
    if (!p) return;
    modoTour = !!comoTour;
    var lista;
    if (modoTour) {
      passoTour = typeof passo === "number" ? passo : TOUR.indexOf(id);
      if (passoTour < 0) passoTour = 0;
      lista = TOUR.map(porId);
    } else {
      lista = p.categoria === "reels" ? listaReels : listaPrincipal;
      if (lista.indexOf(p) < 0) lista = p.categoria === "reels" ? REELS : PRINCIPAIS;
    }
    modalLista = lista;
    modalIdx = lista.indexOf(p);
    preencherCaso(p, modoTour ? passoTour + 1 : modalIdx + 1, lista.length);
    atualizarNavegacao();

    if (casoEl.hidden) {
      elementoAntesDoModal = document.activeElement;
      casoEl.hidden = false;
      document.body.classList.add("travado");
      casoJanelaEl.querySelector(".caso-fechar").focus();
    }
    var hash = "#caso-" + p.id;
    if (location.hash !== hash) history.replaceState(null, "", hash);
  }

  function fecharCaso() {
    if (casoEl.hidden) return;
    casoEl.hidden = true;
    document.body.classList.remove("travado");
    document.getElementById("casoImagem").innerHTML = ""; // interrompe o vídeo ao fechar
    modoTour = false;
    if (location.hash.indexOf("#caso-") === 0) history.replaceState(null, "", location.pathname + location.search);
    if (elementoAntesDoModal && elementoAntesDoModal.focus) elementoAntesDoModal.focus();
  }

  function irPara(direcao) {
    if (casoEl.hidden) return;
    if (modoTour) {
      var novo = passoTour + direcao;
      if (novo < 0) return;
      if (novo >= TOUR.length) { fecharCaso(); document.getElementById("contato").scrollIntoView({ behavior: "smooth" }); return; }
      abrirCaso(TOUR[novo], true, novo);
      return;
    }
    var n = (modalIdx + direcao + modalLista.length) % modalLista.length;
    abrirCaso(modalLista[n].id, false);
  }

  function iniciarTour() {
    if (!TOUR.length) return;
    abrirCaso(TOUR[0], true, 0);
  }

  document.getElementById("casoAnterior").addEventListener("click", function () { irPara(-1); });
  document.getElementById("casoProximo").addEventListener("click", function () { irPara(1); });
  casoEl.addEventListener("click", function (e) { if (e.target.hasAttribute("data-fechar")) fecharCaso(); });
  document.getElementById("botaoTourHero").addEventListener("click", iniciarTour);
  document.getElementById("botaoTourNav").addEventListener("click", iniciarTour);

  document.getElementById("casoCopiar").addEventListener("click", function () {
    var btn = this;
    var atual = modalLista[modalIdx];
    var url = location.href.split("#")[0] + "#caso-" + (atual ? atual.id : "");
    function ok() { var antes = btn.textContent; btn.textContent = t("linkCopiado"); setTimeout(function () { btn.textContent = antes; }, 1800); }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(ok, ok);
    else ok();
  });

  document.addEventListener("keydown", function (e) {
    if (casoEl.hidden) return;
    if (e.key === "Escape") fecharCaso();
    else if (e.key === "ArrowRight") irPara(1);
    else if (e.key === "ArrowLeft") irPara(-1);
    else if (e.key === "Tab") {
      var focaveis = casoJanelaEl.querySelectorAll("a[href], button:not([disabled])");
      var visiveis = Array.prototype.filter.call(focaveis, function (el) { return el.offsetParent !== null && getComputedStyle(el).visibility !== "hidden"; });
      if (!visiveis.length) return;
      var primeiro = visiveis[0], ultimo = visiveis[visiveis.length - 1];
      if (e.shiftKey && document.activeElement === primeiro) { e.preventDefault(); ultimo.focus(); }
      else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primeiro.focus(); }
    }
  });

  function abrirPeloHash() {
    var m = location.hash.match(/^#caso-(.+)$/);
    if (m && porId(m[1])) abrirCaso(m[1], false);
  }
  window.addEventListener("hashchange", function () {
    if (location.hash.indexOf("#caso-") === 0) abrirPeloHash();
    else if (!casoEl.hidden) fecharCaso();
  });

  /* ---------- Navegação ---------- */
  var navEl = document.getElementById("nav");
  function aoRolar() { navEl.classList.toggle("rolou", window.scrollY > 24); }
  window.addEventListener("scroll", aoRolar, { passive: true });
  aoRolar();

  /* ---------- Hero: círculo de luz e mosaico em paralaxe ---------- */
  var hero = document.getElementById("hero");
  var brilho = document.getElementById("heroBrilho");
  var mosaico = document.getElementById("heroMosaico");
  var pecas = mosaico ? mosaico.querySelectorAll(".m") : [];
  var reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (hero && !reduzir) {
    hero.addEventListener("mousemove", function (e) {
      var r = hero.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width;
      var y = (e.clientY - r.top) / r.height;
      brilho.style.setProperty("--bx", ((x - 0.5) * -90) + "px");
      brilho.style.setProperty("--by", ((y - 0.5) * -70) + "px");
      Array.prototype.forEach.call(pecas, function (el) {
        var prof = parseFloat(el.dataset.prof) || 1;
        el.style.setProperty("--tx", ((x - 0.5) * -28 * prof) + "px");
        el.style.setProperty("--ty", ((y - 0.5) * -22 * prof) + "px");
      });
    });
  }

  /* ---------- Contadores ---------- */
  // O número de peças acompanha a quantidade de projetos cadastrados em projetos.js.
  var numPecasEl = document.getElementById("numPecas");
  if (numPecasEl) numPecasEl.dataset.contar = String(PROJETOS.length);

  function contar(el) {
    var alvo = parseInt(el.dataset.contar, 10);
    var prefixo = el.dataset.prefixo || "";
    var sufixo = el.dataset.sufixo || "";
    if (reduzir) { el.textContent = prefixo + alvo + sufixo; return; }
    var inicio = null, dur = 1400;
    function passo(t) {
      if (inicio === null) inicio = t;
      var k = Math.min((t - inicio) / dur, 1);
      var ease = 1 - Math.pow(1 - k, 3);
      el.textContent = prefixo + Math.round(alvo * ease) + (k === 1 ? sufixo : "");
      if (k < 1) requestAnimationFrame(passo);
    }
    requestAnimationFrame(passo);
  }

  /* ---------- Revelar ao rolar ---------- */
  var revelaveis = document.querySelectorAll(".reveal");
  Array.prototype.forEach.call(revelaveis, function (el, i) { el.style.setProperty("--atraso", ((i % 4) * 80) + "ms"); });
  if ("IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visivel"); obs.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    Array.prototype.forEach.call(revelaveis, function (el) { obs.observe(el); });

    var obsNum = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) { if (en.isIntersecting) { contar(en.target); obsNum.unobserve(en.target); } });
    }, { threshold: 0.6 });
    Array.prototype.forEach.call(document.querySelectorAll("[data-contar]"), function (el) { obsNum.observe(el); });
  } else {
    Array.prototype.forEach.call(revelaveis, function (el) { el.classList.add("visivel"); });
    Array.prototype.forEach.call(document.querySelectorAll("[data-contar]"), contar);
  }

  /* ---------- Cursor personalizado ---------- */
  var cursor = document.getElementById("cursor");
  var cursorRotulo = document.getElementById("cursorRotulo");
  var temMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var cx = 0, cy = 0, alvoX = 0, alvoY = 0;
  if (temMouse && cursor) {
    window.addEventListener("mousemove", function (e) { alvoX = e.clientX; alvoY = e.clientY; cursor.classList.add("ativo"); });
    document.addEventListener("mouseleave", function () { cursor.classList.remove("ativo"); });
    (function loop() {
      cx += (alvoX - cx) * 0.22; cy += (alvoY - cy) * 0.22;
      cursor.style.transform = "translate(" + cx + "px," + cy + "px)";
      requestAnimationFrame(loop);
    })();
  }
  function ligarCursorCard(card) {
    if (!temMouse) return;
    card.addEventListener("mouseenter", function () { cursorRotulo.textContent = card.dataset.rotulo || "Ver"; cursor.classList.add("grande"); });
    card.addEventListener("mouseleave", function () { cursor.classList.remove("grande"); });
  }

  /* ---------- Idioma (português / inglês) ---------- */
  var traduziveis = document.querySelectorAll("[data-i18n]");
  Array.prototype.forEach.call(traduziveis, function (el) { el.dataset.pt = el.innerHTML; });
  var botoesIdioma = document.querySelectorAll(".idioma-troca button");
  var metaDescricao = document.querySelector('meta[name="description"]');

  function idiomaInicial() {
    var pedido = (location.search.match(/[?&]lang=(pt|en)/) || [])[1];
    if (pedido) return pedido;
    try { var salvo = localStorage.getItem("idioma"); if (salvo === "pt" || salvo === "en") return salvo; } catch (e) {}
    // Sem escolha anterior: navegador em português abre em português; qualquer outro abre em inglês.
    return /^pt/i.test(navigator.language || "pt") ? "pt" : "en";
  }

  function aplicarIdioma(novo, salvar) {
    idioma = novo;
    if (salvar) { try { localStorage.setItem("idioma", novo); } catch (e) {} }
    document.documentElement.lang = novo === "en" ? "en" : "pt-BR";
    document.title = t("tituloPagina");
    if (metaDescricao) metaDescricao.setAttribute("content", t("descricaoPagina"));
    Array.prototype.forEach.call(traduziveis, function (el) {
      el.innerHTML = novo === "en" && TEXTOS_EN[el.dataset.i18n] != null ? TEXTOS_EN[el.dataset.i18n] : el.dataset.pt;
    });
    Array.prototype.forEach.call(botoesIdioma, function (b) { b.setAttribute("aria-pressed", b.dataset.idioma === novo ? "true" : "false"); });
    var curriculo = document.getElementById("linkCurriculo");
    if (curriculo) curriculo.setAttribute("href", t("curriculo"));

    montarFiltros();
    montarGrade();
    if (!casoEl.hidden && modalLista[modalIdx]) {
      preencherTextosCaso(modalLista[modalIdx]);
      atualizarNavegacao();
    }
  }

  Array.prototype.forEach.call(botoesIdioma, function (b) {
    b.addEventListener("click", function () { aplicarIdioma(b.dataset.idioma, true); });
  });

  /* ---------- Início ---------- */
  botaoMaisEl.addEventListener("click", alternarExpansao);
  botaoMaisReelsEl.addEventListener("click", alternarExpansaoReels);
  aplicarIdioma(idiomaInicial(), false);
  abrirPeloHash();
})();
