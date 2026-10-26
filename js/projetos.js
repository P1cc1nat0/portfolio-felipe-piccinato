/*
  Dados do portfólio.

  - youtubeId: código do vídeo no YouTube (a parte depois de youtu.be/ ou /shorts/). Sem ele, o site mostra só a capa.
  - vertical: true para vídeos 9:16 (Reels/Shorts). O player se adapta ao formato.
  - categoria: tipo de trabalho. "reels" fica na aba "Reels & vídeos verticais", fora da grade principal.
  - cliente: nome exibido. Os filtros por cliente são montados sozinhos a partir deste campo.
  - destaque: true para as peças em destaque (aparecem primeiro na grade).
  - meuPapel: o que você fez na peça.
*/
window.CATEGORIAS_PORTFOLIO = [
  { id: "motion",        nome: "Motion & Vinhetas" },
  { id: "comercial",     nome: "Comerciais & Mídia" },
  { id: "institucional", nome: "Institucional & Documentário" },
  { id: "social",        nome: "Social & Campanha" },
  { id: "reels",         nome: "Redes sociais" }
];

window.PROJETOS_PORTFOLIO = [

  /* ---------------- MOTION & VINHETAS ---------------- */
  {
    id: "rock-n-pop",
    titulo: "Rock 'n' Pop",
    cliente: "Jovem Pan",
    categoria: "motion",
    formato: "Vinheta animada",
    capa: "assets/capas/rock-n-pop.png",
    youtubeId: "VlqZF9pE8Zw",
    destaque: true,
    ideia: "Vinheta do programa Rock 'n' Pop, da Jovem Pan de São José dos Campos. O logotipo nasce num fundo preto granulado, riscado como a parede de um camarim, e o \"JP\" vermelho assume o lugar do \"O\" de POP. Raios, caveira e riscos de giz dão a assinatura do rock sem poluir a marca.",
    destaques: [
      "Player e onda de áudio ao fundo lembram que é rádio: o som está sempre implícito.",
      "Paleta mínima, preto, branco e o vermelho da Jovem Pan, para a marca continuar mandando na tela.",
      "Textura de papel e giz que traz o clima de show para um formato de poucos segundos."
    ],
    meuPapel: "Elementos gráficos, edição e montagem."
  },
  {
    id: "planck-lego",
    titulo: "Abertura Lego em 3D",
    cliente: "Colégio Planck",
    categoria: "motion",
    formato: "Vinheta animada 3D",
    capa: "assets/capas/planck-lego.jpg",
    youtubeId: "jMk6en-rvu0",
    destaque: true,
    ideia: "Abertura em 3D criada para uma campanha do Colégio Planck com tema Lego. Blocos em amarelo e roxo, as cores da escola, voam e se espalham por um cenário claro, com profundidade e luz suave, transformando a marca da escola em brincadeira de montar.",
    destaques: [
      "Blocos nas cores da identidade do colégio, sem precisar de logotipo na primeira cena.",
      "Cenário claro e limpo, que deixa as cores e as sombras dos blocos em primeiro plano.",
      "Movimento em profundidade, com blocos em diferentes distâncias da câmera."
    ],
    meuPapel: "Montagem e edição."
  },
  {
    id: "ary-barroso",
    titulo: "Vinheta de apresentação",
    cliente: "Escola de Música Ary Barroso",
    categoria: "motion",
    formato: "Vinheta animada",
    capa: "assets/capas/ary-barroso.jpg",
    youtubeId: "VDkhXtUOYVs",
    destaque: true,
    ideia: "Vinheta da escola de música Ary Barroso, de São José dos Campos, feita em ilustração animada de traço branco sobre fundo azul-petróleo. Uma mão desenhada dedilha linhas que atravessam postes e montanhas, unindo música e paisagem numa cena só.",
    destaques: [
      "Traço fino em branco contra azul e tons terrosos, uma paleta delicada e musical.",
      "As linhas horizontais funcionam ao mesmo tempo como cordas e como pauta.",
      "Narrativa em cenas desenhadas, em vez de recursos prontos."
    ],
    meuPapel: "Criação das cenas, edição e montagem."
  },
  {
    id: "manzacast",
    titulo: "Vinheta ManzaCast",
    cliente: "Manza Studio",
    categoria: "motion",
    formato: "Vinheta de podcast",
    capa: "assets/yt/pbKDZ2XgViE.jpg",
    youtubeId: "pbKDZ2XgViE",
    destaque: true,
    ideia: "Vinheta de abertura do ManzaCast, podcast de arquitetura do Manza Studio. O título surge como um projeto técnico: letras em volume 3D desenhadas em linhas de estrutura, sobre uma malha de papel quadriculado, tudo em tons de cinza.",
    destaques: [
      "Linguagem de projeto arquitetônico (traçado, malha e volume) aplicada à tipografia.",
      "Paleta cinza e branca, sóbria e coerente com o assunto do podcast.",
      "Título em 3D que ganha forma aos poucos, como uma planta sendo construída."
    ],
    meuPapel: "Edição."
  },
  {
    id: "planck-fisica",
    titulo: "O Maravilhoso Mundo da Física",
    cliente: "Colégio Planck",
    categoria: "motion",
    formato: "Vinheta animada",
    capa: "assets/capas/fisica.png",
    youtubeId: "gyHPv3Zcjdk",
    destaque: true,
    ideia: "Vinheta de um dos programas do Colégio Planck. A proposta é que cada programa da escola, seja de física, química ou matemática, tenha a sua própria vinheta. Nesta, o professor aparece ilustrado, apoiado num átomo, dentro de um turbilhão de formas em amarelo, azul e roxo.",
    destaques: [
      "Personagem ilustrado que cria proximidade com o aluno logo no primeiro segundo.",
      "Formas onduladas que lembram ondas e órbitas, reforçando o tema.",
      "Título em arco, no estilo de cartaz, que dá identidade à série."
    ],
    meuPapel: "Edição e animação."
  },

  /* ---------------- COMERCIAIS & MÍDIA ---------------- */
  {
    id: "jp-ibope",
    titulo: "Ibope: líder em cobertura diária",
    cliente: "Jovem Pan",
    categoria: "comercial",
    formato: "Comercial para TV",
    capa: "assets/capas/jp-ibope.jpg",
    youtubeId: "J4oLUoEEPX0",
    destaque: true,
    ideia: "Número de audiência costuma ser um slide chato. Aqui virou cena: silhuetas holográficas ligadas por uma rede de pontos representam os ouvintes, e frases como \"líder em cobertura diária\" e \"maior número de ouvintes por minuto\" entram em vermelho gigante.",
    destaques: [
      "Dado transformado em imagem: cada figura da rede é um ouvinte.",
      "Tipografia grande, com o vermelho da marca no que importa.",
      "Fonte da pesquisa e legenda em destaque, para a informação ficar clara e confiável."
    ],
    meuPapel: "Roteiro, edição e montagem."
  },
  {
    id: "jp-programas",
    titulo: "Sintonize 94,3 FM",
    cliente: "Jovem Pan",
    categoria: "comercial",
    formato: "Comercial para TV",
    capa: "assets/capas/jp-programas.jpg",
    youtubeId: "xSIEcfF5qMY",
    ideia: "Comercial de TV para apresentar os programas da rádio. Nada melhor que o gesto que todo ouvinte conhece: girar o botão do dial. A mão sobre um rádio antigo, com o ponteiro passando pela faixa, leva direto ao chamado \"Sintonize 94,3 FM\".",
    destaques: [
      "Imagem de rádio analógico traz nostalgia e reforça a ideia de sintonia.",
      "Frequência em vermelho forte, o dado que o público precisa guardar.",
      "Composição simples, que funciona em poucos segundos de TV."
    ],
    meuPapel: "Roteiro, montagem e edição."
  },
  {
    id: "jp-elevador",
    titulo: "O seu cliente é a nossa audiência",
    cliente: "Jovem Pan",
    categoria: "comercial",
    formato: "Eletromídia para elevador",
    capa: "assets/capas/jp-elevador.jpg",
    youtubeId: "UlPCRvhKWoY",
    ideia: "Conteúdo para as telas de elevador, com o recado de venda da rádio para o anunciante. Frases curtas em caixa alta, com o vermelho marcando a promessa, e elementos como boca e megafone em colagem de meio-tom, microfone e QR code de \"anuncie\" levam quem assiste a agir em poucos segundos.",
    destaques: [
      "Mensagens curtas e diretas, pensadas para leitura rápida em tela de elevador.",
      "Colagem em meio-tom que traz textura e personalidade a uma mídia normalmente fria.",
      "QR code de anúncio integrado ao layout, convertendo atenção em contato."
    ],
    meuPapel: "Roteiro, montagem e edição."
  },

  /* ---------------- INSTITUCIONAL & DOCUMENTÁRIO ---------------- */
  {
    id: "beira-mar-surf-pro",
    titulo: "Cobertura do Surf Pro",
    cliente: "Rádio Beira Mar",
    categoria: "institucional",
    formato: "Vídeo institucional",
    capa: "assets/capas/beira-mar-surf-pro.jpg",
    youtubeId: "4N-9QbqL6r0",
    ideia: "Vídeo da Rádio Beira Mar, de Ubatuba, exibido no Surf Pro, evento que a emissora cobriu. O repórter fala direto para a câmera dentro do estúdio da rádio, com a marca BM 101.5 FM e o título da editoria aplicados sobre a imagem.",
    destaques: [
      "Enquadramento que mostra o estúdio da rádio, reforçando a identidade da emissora.",
      "Gráficos de marca e de editoria que dão acabamento de telejornal.",
      "Ritmo de edição pensado para exibição no evento e circulação nas redes."
    ],
    meuPapel: "Roteiro, edição e postagem."
  },
  {
    id: "artcolor-institucional",
    titulo: "Vídeo institucional",
    cliente: "Art Color Texturas",
    categoria: "institucional",
    formato: "Vídeo institucional",
    capa: "assets/capas/artcolor-institucional.jpg",
    youtubeId: "tzAQn80CkPI",
    ideia: "Vídeo institucional da Art Color Texturas, de Jacareí, criado para rodar nas redes sociais e também na tela do podcast que a empresa patrocina. Cenas de laboratório e frases como \"Texturas certificadas\" reforçam qualidade e confiança no produto.",
    destaques: [
      "Imagens de laboratório que traduzem rigor técnico e controle de qualidade.",
      "Frases curtas em destaque na tela, legíveis mesmo sem som.",
      "Um mesmo vídeo preparado para dois usos: redes sociais e tela de podcast."
    ],
    meuPapel: "Roteiro e edição."
  },
  {
    id: "poli-pet-tv",
    titulo: "Vídeo para TV interna",
    cliente: "Poli-Pet",
    categoria: "institucional",
    formato: "TV interna de loja",
    capa: "assets/capas/poli-pet-tv.jpg",
    youtubeId: "0SnQT2mrAyY",
    ideia: "Vídeo feito para as telas dentro da loja da Poli-Pet, onde o cliente já está decidindo a compra, apresentando produtos e promoções. A peça divulga o Clube+ Poli-Pet, com cashback em todas as compras e cadastro gratuito por QR code, no verde-limão e no padrão de ícones pet da marca.",
    destaques: [
      "Informação central (cashback e cadastro gratuito) em lista curta e legível à distância.",
      "QR code integrado ao layout para o cliente se cadastrar na hora.",
      "Consistência com a identidade da marca em todos os pontos de contato."
    ],
    meuPapel: "Roteiro, edição e montagem."
  },
  {
    id: "the-pet-gps",
    titulo: "Funcionalidades da coleira GPS",
    cliente: "The Pet GPS",
    categoria: "institucional",
    formato: "Vídeo para YouTube",
    capa: "assets/yt/3GgXCMHx9zg.jpg",
    youtubeId: "3GgXCMHx9zg",
    ideia: "Vídeo para o canal da The Pet GPS, de São José dos Campos, apresentando as principais funcionalidades da coleira GPS: rastreamento em tempo real, cerca virtual, histórico de trajetos, bateria de longa duração e resistência à água. Cães e gatos em primeiro plano e ícones explicativos organizam a informação.",
    destaques: [
      "Recursos do produto traduzidos em ícones e frases curtas.",
      "Animais em destaque, que criam conexão emocional com quem tem pet.",
      "Formato pensado para o YouTube, com título forte logo no primeiro quadro."
    ],
    meuPapel: "Captação e edição."
  },
  {
    id: "punk-doc",
    titulo: "Punk Doc",
    cliente: "Projeto de graduação",
    categoria: "institucional",
    formato: "Documentário",
    capa: "assets/capas/punk-doc.jpg",
    youtubeId: "pY5NIfL1-hw",
    ideia: "Documentário produzido como trabalho de conclusão do bacharelado em Rádio e Televisão: um recorte da velha guarda do punk rock na capital paulista. A identidade nasce da própria cena, com letras que parecem cercadas de arame farpado, símbolo de anarquia em vermelho e preto total ao fundo.",
    destaques: [
      "Do roteiro à finalização, passando por captação, entrevistas e animação.",
      "Tipografia agressiva e rústica, coerente com o assunto.",
      "Vermelho e preto como linguagem de cartaz de show."
    ],
    meuPapel: "Captação, roteiro, edição, animação e entrevistas."
  },

  /* ---------------- SOCIAL & CAMPANHA ---------------- */
  {
    id: "vloot-sorteio",
    titulo: "Sorteio de disco",
    cliente: "VLOOT Discos",
    categoria: "social",
    formato: "Vídeo de sorteio",
    capa: "assets/capas/vloot-sorteio.jpg",
    youtubeId: "jIYkjPPVGZE",
    ideia: "Vídeo para o sorteio de um disco do The Offspring (Greatest Hits) no perfil da VLOOT Discos, clube de assinatura de vinil. O disco aparece em primeiro plano, sobre fundo em degradê verde, e as regras de participação entram na tela: seguir o perfil, marcar três amigos apaixonados por música e compartilhar nos stories.",
    destaques: [
      "Produto fotografado como objeto de desejo, com a capa e o vinil em destaque.",
      "Regras de participação em lista curta, fáceis de entender.",
      "Layout limpo, pronto para stories e feed."
    ],
    meuPapel: "Roteiro, animação e edição."
  },

  /* ---------------- REELS & VÍDEOS VERTICAIS ---------------- */
  {
    id: "reel-beira-mar-programas",
    titulo: "Programas da casa",
    cliente: "Rádio Beira Mar",
    categoria: "reels",
    formato: "Reels",
    capa: "assets/capas/reel-beira-mar-programas.jpg",
    youtubeId: "GAryYJH2lWE",
    vertical: true,
    ideia: "Reels para mostrar os programas da Rádio Beira Mar, de Ubatuba. Cartões de \"entrevista exclusiva\" aparecem sobre a imagem da conversa no estúdio, apresentando o convidado e o endereço da rádio.",
    destaques: [
      "Cartão de entrevista que identifica o convidado sem tirar o foco da conversa.",
      "Identidade da emissora presente em todos os quadros.",
      "Formato vertical pensado para o feed e os stories."
    ],
    meuPapel: "Roteiro, edição e montagem."
  },
  {
    id: "reel-beira-mar-led",
    titulo: "Reels e painel de LED",
    cliente: "Rádio Beira Mar",
    categoria: "reels",
    formato: "Painel de LED",
    capa: "assets/capas/reel-beira-mar-led.jpg",
    youtubeId: "a7mcHhhmAHY",
    vertical: false,
    ideia: "Vídeo pensado para dois usos: Reels e painel de LED. Foi exibido no painel de LED do centro de Ubatuba. A colagem em meio-tom, com boca em estilo pop art em amarelo e roxo, chama a atenção de longe e funciona mesmo sem som.",
    destaques: [
      "Cores de alto contraste, pensadas para leitura ao ar livre.",
      "Textura de meio-tom que dá personalidade à mídia exterior.",
      "Roteiro curto, para quem passa e olha por poucos segundos."
    ],
    meuPapel: "Roteiro, edição e montagem."
  },
  {
    id: "reel-gs2",
    titulo: "Assinatura de Reels",
    cliente: "GS2 Marketing",
    categoria: "reels",
    formato: "Assinatura animada",
    capa: "assets/capas/reel-gs2.jpg",
    youtubeId: "n2L88xg8W6Q",
    vertical: true,
    ideia: "Assinatura animada para fechar os Reels da GS2 Marketing. O símbolo da marca em roxo aparece de forma discreta sobre fundo neutro e dá o mesmo acabamento a todos os vídeos da agência.",
    destaques: [
      "Animação curta e limpa, que não disputa atenção com o conteúdo.",
      "Reaproveitável em qualquer Reels da agência.",
      "Consistência de marca ao final de cada vídeo."
    ],
    meuPapel: "Animação e edição."
  },
  {
    id: "reel-ego-corp",
    titulo: "Reels institucional",
    cliente: "EGO Corp",
    categoria: "reels",
    formato: "Institucional",
    capa: "assets/capas/reel-ego-corp.jpg",
    youtubeId: "sS9inCa-bYQ",
    vertical: true,
    ideia: "Reels institucional da EGO Corp, produtora de São José dos Campos. A pergunta \"Mora no Urbanova?\" abre a peça, e um celular com mapa e localização mostra um serviço local, a barbearia que vai até o cliente, de forma direta.",
    destaques: [
      "Pergunta de abertura que segmenta o público logo no primeiro segundo.",
      "Mockup de celular com mapa que explica o serviço sem precisar de texto longo.",
      "Tipografia forte, legível mesmo sem som."
    ],
    meuPapel: "Roteiro, montagem e edição."
  },
  {
    id: "reel-ezaki",
    titulo: "Instalação em destaque",
    cliente: "Ezaki Ar Condicionados",
    categoria: "reels",
    formato: "Institucional",
    capa: "assets/capas/reel-ezaki.jpg",
    youtubeId: "VCe4kHyk5mk",
    vertical: true,
    ideia: "Reels institucional da Ezaki Ar Condicionados. A instalação do equipamento aparece em cena real, com legendas curtas em destaque sobre a imagem para explicar cada etapa do serviço.",
    destaques: [
      "Cena real de trabalho, que passa confiança e profissionalismo.",
      "Legendas curtas, para entender sem som.",
      "Formato vertical direto ao ponto."
    ],
    meuPapel: "Roteiro, montagem e edição."
  },
  {
    id: "reel-artcolor-haus-decor",
    titulo: "Haus Decor 2027",
    cliente: "Art Color Texturas",
    categoria: "reels",
    formato: "Divulgação de evento",
    capa: "assets/capas/reel-artcolor-haus-decor.jpg",
    youtubeId: "zktOOssP8N8",
    vertical: true,
    ideia: "Reels de divulgação do evento Haus Decor 2027 para a Art Color Texturas. A equipe da empresa aparece à mesa, em tom descontraído, com legendas dinâmicas em laranja sobre a imagem.",
    destaques: [
      "Equipe em cena, que humaniza a marca e convida para o evento.",
      "Legendas em cor de destaque para sustentar a atenção.",
      "Ritmo de edição próprio de Reels."
    ],
    meuPapel: "Edição e montagem."
  },
  {
    id: "reel-manza-led",
    titulo: "Leve seu podcast ao próximo nível",
    cliente: "Manza Studio",
    categoria: "reels",
    formato: "Painel de LED",
    capa: "assets/capas/reel-manza-led.jpg",
    youtubeId: "fO8mQNxmA44",
    vertical: true,
    ideia: "Vídeo feito para Reels e para painéis de LED espalhados pela cidade, divulgando o aluguel do estúdio do Manza Studio. A imagem do estúdio vem acompanhada da lista de serviços (podcast, entrevistas, lives, videoaulas, depoimentos e produtos), com ondas de áudio em rosa nas laterais.",
    destaques: [
      "Chamada direta e a lista completa de serviços numa única tela.",
      "Ondas de áudio que traduzem o universo do podcast.",
      "Contato e site visíveis ao final."
    ],
    meuPapel: "Roteiro, montagem e edição."
  },
  {
    id: "reel-sicoob",
    titulo: "Mais que uma escolha financeira",
    cliente: "Sicoob",
    categoria: "reels",
    formato: "Ads",
    capa: "assets/capas/reel-sicoob.jpg",
    youtubeId: "2wS1pcEhAUE",
    vertical: true,
    ideia: "Vídeo em formato de anúncio para campanhas da Sicoob. A frase \"Mais que uma escolha financeira\" abre a peça e é seguida de \"Soluções para o que você precisar\", sobre a imagem da fachada de uma agência.",
    destaques: [
      "Mensagem institucional clara, em poucas palavras.",
      "Imagem da agência que ancora a marca no mundo real.",
      "Formato pensado para anúncios em campanhas."
    ],
    meuPapel: "Montagem e edição."
  },
  {
    id: "reel-vloot-jackpot",
    titulo: "Leve o jackpot",
    cliente: "VLOOT Discos",
    categoria: "reels",
    formato: "Reels · tema do mês",
    capa: "assets/capas/reel-vloot-jackpot.jpg",
    youtubeId: "74A1zD5XMcE",
    vertical: true,
    ideia: "Reels baseado no tema do mês escolhido pelo cliente, para o clube de assinatura de discos de vinil VLOOT Discos. A peça gira em torno do \"jackpot\", com tipografia grande em dourado e luz quente sobre fundo escuro.",
    destaques: [
      "Clima de cassino construído só com tipografia, cor e luz.",
      "Cada tema do mês ganha uma identidade própria.",
      "Chamada de assinatura no lugar certo da narrativa."
    ],
    meuPapel: "Roteiro, montagem e edição."
  },
  {
    id: "reel-vloot-noir",
    titulo: "Edição Noir",
    cliente: "VLOOT Discos",
    categoria: "reels",
    formato: "Reels · tema do mês",
    capa: "assets/capas/reel-vloot-noir.jpg",
    youtubeId: "lc0qnXu8rOA",
    vertical: true,
    ideia: "Outro Reels do tema do mês da VLOOT Discos, agora em versão noir: preto e branco, sombras e tipografia grande em cinza, com frases como \"O som preenche a cidade\".",
    destaques: [
      "Tratamento em preto e branco que cria clima de filme noir.",
      "Tipografia gigante que ocupa a tela e conduz a leitura.",
      "Mesma estrutura da série, com identidade visual diferente."
    ],
    meuPapel: "Roteiro, montagem e edição."
  }
];

/* Sequência do "Tour de 2 minutos": três peças de áreas diferentes. */
window.TOUR_PORTFOLIO = ["rock-n-pop", "planck-lego", "jp-ibope"];
