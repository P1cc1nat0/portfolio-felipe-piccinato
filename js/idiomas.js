/*
  Textos em inglês do site.

  - TEXTOS_EN: tradução dos elementos marcados com data-i18n="chave" no index.html (o português fica no próprio HTML).
  - TEXTOS_UI: textos montados pelo main.js (filtros, botões, visualizador), nos dois idiomas.
  - Os textos de cada projeto em inglês ficam em projetos.js, no campo "en" de cada peça.
*/
window.TEXTOS_EN = {
  nav_trabalhos: "Work",
  nav_sobre: "About",
  nav_processo: "Process",
  nav_contato: "Contact",
  nav_tour: "2-min tour",

  hero_etiqueta: "Portfolio · 2026",
  hero_cargos: "Motion Designer<br>Video Editor<br>Art Director",
  selo: "Motion · Video · Art direction ·",
  hero_sub: "<strong>Motion design and video with strategy.</strong> Idents, commercials, VSLs and social media content that capture attention, communicate clearly and support the brand, with speed and professional polish.",
  hero_ver: "View work <span aria-hidden=\"true\">↓</span>",
  hero_tour: "<span class=\"play\" aria-hidden=\"true\"></span>2-minute tour",
  num_anos: "years of experience",
  num_clientes: "clients served",
  num_pecas: "pieces in this selection",

  trab_rotulo: "<b>01</b> Work",
  trab_h2: "A selection of what I do <em>best.</em>",
  trab_sub: "Filter by type of work and click a piece to watch it and see the idea behind it. Keyboard arrows move between pieces.",
  titulo_horizontal: "<span>Horizontal</span><small>Long videos, idents and commercials</small>",
  titulo_vertical: "<span>Vertical</span><small>Reels and social media videos</small>",

  sobre_rotulo: "<b>02</b> About",
  sobre_ola: "Hi, I'm Felipe.",
  sobre_lide: "I make <em>videos with purpose</em> for brands that want to be noticed.",
  sobre_p1: "Motion designer and video editor with over ten years of experience and a degree in Radio and Television. My career spans graphic design, art direction and audiovisual production, and today focuses on motion design and editing for brands, agencies and media outlets.",
  sobre_p2: "I work from concept to delivery: I research, develop the idea, produce and finalize pieces such as idents, commercials, VSLs and social media content. I integrate artificial intelligence into the production workflow to gain speed without giving up creativity and polish.",
  sobre_experiencia: "Experience",
  exp_freelancer: "<b>2016–present</b><span><strong>Freelancer</strong> · Motion Designer and Video Editor<br><small>Projects for radio stations, schools, retail and agencies, such as Jovem Pan, Rádio Beira Mar, Colégio Planck and Polipet</small></span>",
  exp_directcash: "<b>2026</b><span><strong>DirectCash</strong> · Video Editor<br><small>VSLs, Instagram content and AI automations</small></span>",
  exp_gs2: "<b>2024–25</b><span><strong>GS2 Marketing</strong> · Motion Designer<br><small>Idents, illustrations and social media videos</small></span>",
  exp_gecko: "<b>2022–24</b><span><strong>Gecko Marketing Digital</strong> · Art Director<br><small>Design team, brand identity and campaigns</small></span>",
  exp_manza: "<b>2022–23</b><span><strong>Manza Studio</strong> · Head Editor<br><small>Podcasts: recording and editing</small></span>",
  sobre_ferramentas: "Tools",

  proc_rotulo: "<b>03</b> Process",
  proc_h2: "From brief to delivery,<br><em>a clear process.</em>",
  passo1_t: "Brief",
  passo1_d: "Defining goal, audience and channel. Knowing where the piece will run (TV, indoor media, social media or a sales page) sets the format, length and language.",
  passo2_t: "Concept",
  passo2_d: "Reference research, visual script and creative direction. Every choice of color, rhythm and typography comes from a central idea, not chance.",
  passo3_t: "Production",
  passo3_d: "Motion, editing and design with professional polish. AI tools automate repetitive tasks and free up time for what sets the piece apart.",
  passo4_t: "Delivery",
  passo4_d: "Final files in the formats each channel needs, on schedule and ready to publish, with objective revisions aligned from the start.",

  cont_rotulo: "<b>04</b> Contact",
  cont_h2: "Got an idea?<br>Let's <em>talk.</em>",
  cont_whatsapp: "Message me on WhatsApp <span aria-hidden=\"true\">→</span>",
  cont_curriculo: "Download résumé (PDF) ↓",

  rodape_cargo: "Motion Designer · São José dos Campos, SP, Brazil",
  rodape_topo: "Back to top ↑",

  caso_ideia: "The idea",
  caso_papel: "My role",
  caso_ferramentas: "Tools",
  caso_youtube: "Watch on YouTube ↗",
  caso_copiar: "Copy link to this piece",
  caso_anterior: "Previous"
};

window.TEXTOS_UI = {
  pt: {
    todos: "Todos",
    destaque: "Destaque ★",
    assistir: "Assistir",
    ver: "Ver",
    abrirCase: "Abrir case: ",
    assistirAria: "Assistir: ",
    vazio: "Nenhuma peça neste filtro ainda.",
    verMais: function (n) { return "Ver mais " + n + (n === 1 ? " projeto" : " projetos"); },
    mostrarMenos: "Mostrar menos",
    proxima: "Próxima",
    proximaTour: "Próxima do tour",
    terminarTour: "Terminar tour",
    tour: function (a, b) { return "Tour de 2 minutos · " + a + " de " + b; },
    linkCopiado: "Link copiado ✓",
    capaDe: "Capa do projeto ",
    curriculo: "assets/documentos/curriculo-felipe-piccinato.pdf",
    tituloPagina: "Felipe Piccinato — Motion Designer e Editor de Vídeo",
    descricaoPagina: "Portfólio de Felipe Piccinato: motion design, vinhetas, comerciais, vídeo e direção de arte. Criatividade e estratégia em movimento."
  },
  en: {
    todos: "All",
    destaque: "Featured ★",
    assistir: "Watch",
    ver: "View",
    abrirCase: "Open case: ",
    assistirAria: "Watch: ",
    vazio: "No pieces in this filter yet.",
    verMais: function (n) { return "Show " + n + " more " + (n === 1 ? "project" : "projects"); },
    mostrarMenos: "Show less",
    proxima: "Next",
    proximaTour: "Next in tour",
    terminarTour: "End tour",
    tour: function (a, b) { return "2-minute tour · " + a + " of " + b; },
    linkCopiado: "Link copied ✓",
    capaDe: "Cover of the project ",
    curriculo: "assets/documentos/resume-felipe-piccinato-en.pdf",
    tituloPagina: "Felipe Piccinato — Motion Designer and Video Editor",
    descricaoPagina: "Portfolio of Felipe Piccinato: motion design, idents, commercials, video and art direction. Creativity and strategy in motion."
  }
};
