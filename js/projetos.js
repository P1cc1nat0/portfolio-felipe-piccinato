/*
  Dados do portfólio.

  - youtubeId: código do vídeo no YouTube (a parte depois de youtu.be/ ou /shorts/). Sem ele, o site mostra só a capa.
  - vertical: true para vídeos 9:16 (Reels/Shorts). O player se adapta ao formato.
  - categoria: tipo de trabalho. "reels" fica na aba "Reels & vídeos verticais", fora da grade principal.
  - cliente: nome exibido. Os filtros por cliente são montados sozinhos a partir deste campo.
  - destaque: true para as peças em destaque (aparecem primeiro na grade).
  - meuPapel: o que você fez na peça.
  - ferramentas: lista de programas usados na peça.
*/
window.CATEGORIAS_PORTFOLIO = [
  { id: "motion",        nome: "Motion & Vinhetas", nomeEn: "Motion & Idents" },
  { id: "reels",         nome: "Redes sociais", nomeEn: "Social media" },
  { id: "comercial",     nome: "Comerciais & Mídia", nomeEn: "Commercials & Media" },
  { id: "institucional", nome: "Institucional & Documentário", nomeEn: "Corporate & Documentary" },
  { id: "social",        nome: "Social & Campanha", nomeEn: "Social & Campaign" }
];

window.PROJETOS_PORTFOLIO = [

  /* ---------------- MOTION & VINHETAS ---------------- */
  {
    id: "rock-n-pop",
    titulo: "Vinheta Rock n' Pop Rádio Jovem Pan",
    cliente: "Jovem Pan",
    categoria: "motion",
    formato: "Vinheta animada",
    capa: "assets/capas/rock-n-pop.png",
    youtubeId: "VlqZF9pE8Zw",
    destaque: true,
    ideia: "Vinheta criada para o programa Rock 'n' Pop, da Rádio Jovem Pan. O desafio era traduzir a energia e a emoção do programa em uma assinatura forte, aplicada ao final dos vídeos publicados no Instagram sobre o Rock 'n' Pop e capaz de fixar a marca na memória do público.",
    meuPapel: "Do entendimento da identidade visual e da emoção do programa ao desenvolvimento completo da peça: separação e animação dos elementos, edição do vídeo e trilha sonora.",
    ferramentas: ["After Effects", "Illustrator", "Premiere Pro"],
    en: { titulo: "Rock n' Pop Ident, Jovem Pan Radio", formato: "Animated ident", ideia: "Ident created for Rock 'n' Pop, a Jovem Pan Radio show. The challenge was to turn the energy and emotion of the show into a strong signature, added to the end of the Instagram videos about Rock 'n' Pop and built to lodge the brand in the audience's memory.", meuPapel: "From understanding the show's visual identity and emotion to full development of the piece: separating and animating the elements, video editing and soundtrack." }
  },
  {
    id: "planck-lego",
    titulo: "Vinheta 3D Colégio Planck",
    cliente: "Colégio Planck",
    categoria: "motion",
    formato: "Vinheta animada 3D",
    capa: "assets/capas/planck-lego.jpg",
    youtubeId: "jMk6en-rvu0",
    destaque: true,
    ideia: "Vinheta que comunica a nova fase do Colégio Planck. As campanhas da escola giram em torno de crescimento e de montagem, uma referência ao universo Lego e à construção conjunta entre professores e alunos. A vinheta foi criada para assinar o final de todos os vídeos desse tema.",
    meuPapel: "Estudo da identidade visual e criação do conceito, combinando peças de Lego e o logotipo do colégio em uma linguagem limpa, simples e educacional. Responsável pela modelagem 3D, animação, edição e sonorização.",
    ferramentas: ["After Effects", "Blender 3D", "Premiere Pro"],
    en: { titulo: "3D Ident, Colégio Planck", formato: "3D animated ident", ideia: "Ident that announces the new phase of Colégio Planck. The school's campaigns revolve around growth and building, a reference to the Lego universe and to the teachers and students building together. The ident was created to sign off every video on this theme.", meuPapel: "Study of the visual identity and concept creation, combining Lego bricks and the school's logo in a clean, simple, educational language. Responsible for 3D modeling, animation, editing and sound design." }
  },
  {
    id: "ary-barroso",
    titulo: "Vinheta Animada Escola de Música Ary Barroso",
    cliente: "Escola de Música Ary Barroso",
    categoria: "motion",
    formato: "Vinheta animada",
    capa: "assets/capas/ary-barroso.jpg",
    youtubeId: "VDkhXtUOYVs",
    destaque: true,
    ideia: "Vinheta que reúne a identidade visual da escola de música Ary Barroso, com referências a instrumentos sonoros e a um ambiente acolhedor. A peça fecha vídeos de eventos e conteúdos publicados nas redes sociais da escola.",
    meuPapel: "Compreensão da identidade da marca e criação do conceito, com ilustração, animação, edição e sonorização.",
    ferramentas: ["After Effects", "Illustrator", "Premiere Pro"],
    en: { titulo: "Animated Ident, Ary Barroso Music School", formato: "Animated ident", ideia: "Ident that brings together the visual identity of the Ary Barroso music school, with references to musical instruments and a welcoming environment. It closes event videos and content published on the school's social media.", meuPapel: "Understanding the brand identity and creating the concept, with illustration, animation, editing and sound design.", cliente: "Ary Barroso Music School" }
  },
  {
    id: "manzacast",
    titulo: "Vinheta Manza Cast Podcast",
    cliente: "Manza Studio",
    categoria: "motion",
    formato: "Vinheta de podcast",
    capa: "assets/yt/pbKDZ2XgViE.jpg",
    youtubeId: "pbKDZ2XgViE",
    destaque: true,
    ideia: "Vinheta de abertura do ManzaCast, podcast de arquitetura, exibida no início de cada episódio. A linguagem visual parte do universo da construção e da arquitetura.",
    meuPapel: "Estudo da comunicação visual da empresa, animação, sonorização e edição da vinheta.",
    ferramentas: ["After Effects", "Premiere Pro"],
    en: { titulo: "Manza Cast Podcast Ident", formato: "Podcast ident", ideia: "Opening ident for ManzaCast, an architecture podcast, played at the start of every episode. The visual language comes from the world of construction and architecture.", meuPapel: "Study of the company's visual communication, animation, sound design and editing of the ident." }
  },
  {
    id: "planck-fisica",
    titulo: "Vinheta animada “O Maravilhoso Mundo da Física” Colégio Planck",
    cliente: "Colégio Planck",
    categoria: "motion",
    formato: "Vinheta animada",
    capa: "assets/capas/fisica.png",
    youtubeId: "gyHPv3Zcjdk",
    destaque: true,
    ideia: "Vinheta de apresentação dos programas do Colégio Planck: cada disciplina, como física, matemática e química, tem a sua própria. Esta abre as videoaulas de física com uma linguagem animada e acessível, pensada para os alunos.",
    meuPapel: "Entendimento da proposta e da identidade visual, animação dos elementos desenhados, sonorização e edição.",
    ferramentas: ["After Effects", "Premiere Pro", "Illustrator"],
    en: { titulo: "Animated Ident “The Wonderful World of Physics”, Colégio Planck", formato: "Animated ident", ideia: "Opening ident for the Colégio Planck programs: each subject, such as physics, math and chemistry, has its own. This one opens the physics video lessons with an animated, approachable language designed for students.", meuPapel: "Understanding the proposal and visual identity, animating the drawn elements, sound design and editing." }
  },

  /* ---------------- COMERCIAIS & MÍDIA ---------------- */
  {
    id: "jp-ibope",
    titulo: "Comercial Ibope Rádio Jovem Pan",
    cliente: "Jovem Pan",
    categoria: "comercial",
    formato: "Comercial para TV",
    capa: "assets/capas/jp-ibope.jpg",
    youtubeId: "J4oLUoEEPX0",
    destaque: true,
    ideia: "Comercial de TV que apresenta os números do Ibope da Rádio Jovem Pan e comunica ao público que ela é a rádio com mais ouvintes do Vale do Paraíba.",
    meuPapel: "Compreensão da mensagem que a rádio queria transmitir, definição da estratégia, separação dos materiais, edição, sonorização e montagem.",
    ferramentas: ["After Effects", "Premiere Pro"],
    en: { titulo: "Ibope Commercial, Jovem Pan Radio", formato: "TV commercial", ideia: "TV commercial presenting Jovem Pan Radio's Ibope audience numbers and telling viewers it is the radio station with the most listeners in the Vale do Paraíba.", meuPapel: "Understanding the message the station wanted to convey, defining the strategy, organizing the materials, editing, sound design and assembly." }
  },
  {
    id: "jp-programas",
    titulo: "Comercial Programas Rádio Jovem Pan",
    cliente: "Jovem Pan",
    categoria: "comercial",
    formato: "Comercial para TV",
    capa: "assets/capas/jp-programas.jpg",
    youtubeId: "xSIEcfF5qMY",
    ideia: "Comercial para TV que apresenta a programação da Rádio Jovem Pan: os horários, o que vai ao ar em cada um e quais são os programas. Uma forma visual e direta de mostrar ao público tudo o que a rádio oferece.",
    meuPapel: "Compreensão da mensagem e da comunicação da rádio, definição da estratégia, separação dos materiais, edição, sonorização e montagem.",
    ferramentas: ["After Effects", "Premiere Pro"],
    en: { titulo: "Programming Commercial, Jovem Pan Radio", formato: "TV commercial", ideia: "TV commercial presenting Jovem Pan Radio's programming: the schedule, what airs at each time and which shows are on. A visual, direct way of showing the audience everything the station offers.", meuPapel: "Understanding the station's message and communication, defining the strategy, organizing the materials, editing, sound design and assembly." }
  },
  {
    id: "jp-elevador",
    titulo: "Eletromídia Jovem Pan",
    cliente: "Jovem Pan",
    categoria: "comercial",
    formato: "Eletromídia para elevador",
    capa: "assets/capas/jp-elevador.jpg",
    youtubeId: "UlPCRvhKWoY",
    ideia: "Peça para as telas de elevadores e de prédios, criada para atrair anunciantes para a Rádio Jovem Pan. Por se tratar de uma mídia de exibição curta, a mensagem precisava ser rápida, direta e capaz de chamar atenção.",
    meuPapel: "Compreensão da mensagem da rádio, definição da estratégia e do roteiro, montagem e animação dos elementos, edição e sonorização.",
    ferramentas: ["Photoshop", "After Effects", "Premiere Pro"],
    en: { titulo: "Elevator Screen Media, Jovem Pan", formato: "Elevator screen media", ideia: "Piece for elevator and building screens, created to attract advertisers to Jovem Pan Radio. Because the medium offers very short viewing time, the message had to be fast, direct and attention-grabbing.", meuPapel: "Understanding the station's message, defining the strategy and script, assembling and animating the elements, editing and sound design." }
  },

  /* ---------------- INSTITUCIONAL & DOCUMENTÁRIO ---------------- */
  {
    id: "beira-mar-surf-pro",
    titulo: "Cobertura Evento Surf Pro",
    cliente: "Rádio Beira Mar",
    categoria: "institucional",
    formato: "Vídeo institucional",
    capa: "assets/capas/beira-mar-surf-pro.jpg",
    youtubeId: "4N-9QbqL6r0",
    ideia: "Vídeo-mensagem sobre a Rádio Beira Mar, exibido em um telão durante o Surf Pro, em Ubatuba, evento que a emissora cobriu. A peça apresenta ao público presente como a rádio funciona, o que entrega e como acompanhá-la nas redes sociais.",
    meuPapel: "Entendimento do que a rádio queria comunicar no evento, roteiro baseado na comunicação que a emissora já utiliza, separação dos materiais, montagem, edição e sonorização.",
    ferramentas: ["After Effects", "Premiere Pro"],
    en: { titulo: "Surf Pro Event Coverage", formato: "Corporate video", ideia: "Video message about Rádio Beira Mar, shown on a big screen during the Surf Pro in Ubatuba, an event the station covered. It shows attendees how the radio works, what it delivers and how to follow it on social media.", meuPapel: "Understanding what the station wanted to communicate at the event, writing a script based on the communication it already uses, organizing the materials, assembly, editing and sound design." }
  },
  {
    id: "artcolor-institucional",
    titulo: "Vídeo Institucional Artcolor",
    cliente: "Art Color Texturas",
    categoria: "institucional",
    formato: "Vídeo institucional",
    capa: "assets/capas/artcolor-institucional.jpg",
    youtubeId: "tzAQn80CkPI",
    ideia: "Vídeo institucional da Artcolor feito para circular nas redes sociais e em um podcast patrocinado pela empresa. A peça explica, de forma clara, o que a Artcolor faz e oferece.",
    meuPapel: "Compreensão da mensagem e da comunicação da empresa para os dois canais, definição da estratégia e do roteiro, montagem, edição e sonorização.",
    ferramentas: ["After Effects", "Premiere Pro"],
    en: { titulo: "Artcolor Corporate Video", formato: "Corporate video", ideia: "Corporate video for Artcolor, made to run on social media and on a podcast the company sponsors. It explains clearly what Artcolor does and offers.", meuPapel: "Understanding the company's message and communication for both channels, defining strategy and script, assembly, editing and sound design." }
  },
  {
    id: "poli-pet-tv",
    titulo: "Vídeo TV Interna Polipet",
    cliente: "Polipet",
    categoria: "institucional",
    formato: "TV interna de loja",
    capa: "assets/capas/poli-pet-tv.jpg",
    youtubeId: "0SnQT2mrAyY",
    ideia: "Vídeo para a TV interna da loja Polipet, que apresenta aos clientes, na hora da compra, os serviços e vantagens da loja: produtos com desconto, brindes, entrega e outros benefícios.",
    meuPapel: "Compreensão da linguagem da TV interna, separação dos materiais, criação e animação dos elementos, montagem e edição.",
    ferramentas: ["Illustrator", "After Effects", "Premiere Pro"],
    en: { titulo: "In-Store TV Video, Polipet", formato: "In-store TV", ideia: "Video for the in-store TV at Polipet, showing customers at the moment of purchase the store's services and benefits: discounted products, gifts, delivery and more.", meuPapel: "Understanding in-store TV communication, organizing the materials, creating and animating the elements, assembly and editing." }
  },
  {
    id: "the-pet-gps",
    titulo: "Coleira GPS The Pet GPS",
    cliente: "The Pet GPS",
    categoria: "institucional",
    formato: "Vídeo para YouTube",
    capa: "assets/yt/3GgXCMHx9zg.jpg",
    youtubeId: "3GgXCMHx9zg",
    ideia: "Série semanal de vídeos sobre as funcionalidades e as características da coleira GPS da The Pet GPS, com foco em mostrar tudo o que o produto oferece.",
    meuPapel: "Roteiro, captação de imagens, separação do material, montagem, decupagem, edição, sonorização, thumbnail e publicação no YouTube.",
    ferramentas: ["Illustrator", "After Effects", "Premiere Pro"],
    en: { titulo: "GPS Collar, The Pet GPS", formato: "YouTube video", ideia: "Weekly video series about the features and characteristics of The Pet GPS collar, focused on showing everything the product offers.", meuPapel: "Scriptwriting, footage capture, material organization, assembly, logging, editing, sound design, thumbnail and YouTube publishing." }
  },
  {
    id: "punk-doc",
    titulo: "Documentário Punk Doc",
    cliente: "Projeto de graduação",
    categoria: "institucional",
    formato: "Documentário",
    capa: "assets/capas/punk-doc.jpg",
    youtubeId: "pY5NIfL1-hw",
    ideia: "Documentário produzido como trabalho de conclusão do bacharelado em Rádio e Televisão. Retrata um recorte do punk rock na capital paulista, com entrevistas de grandes nomes da cena dos anos 70, e discute como o movimento se encontra nos dias atuais.",
    meuPapel: "Responsável por todas as etapas da produção: roteiro, entrevistas, captação, edição, montagem e sonorização.",
    ferramentas: ["Illustrator", "Photoshop", "After Effects", "Premiere Pro", "Audition"],
    en: { titulo: "Punk Doc Documentary", formato: "Documentary", ideia: "Documentary produced as the final project of a bachelor's degree in Radio and Television. It portrays a slice of punk rock in São Paulo, with interviews with major names of the 1970s scene, and discusses where the movement stands today.", meuPapel: "Responsible for every stage of production: scriptwriting, interviews, filming, editing, assembly and sound design.", cliente: "Graduation project" }
  },

  /* ---------------- SOCIAL & CAMPANHA ---------------- */
  {
    id: "vloot-sorteio",
    titulo: "Sorteio de Disco Vloot Discos",
    cliente: "VLOOT Discos",
    categoria: "social",
    formato: "Vídeo de sorteio",
    capa: "assets/capas/vloot-sorteio.jpg",
    youtubeId: "jIYkjPPVGZE",
    ideia: "Vídeo institucional para o lançamento de um sorteio da Vloot Discos, com a proximidade do show do Offspring no Brasil. A peça foi pensada para chamar atenção e incentivar a participação do público.",
    meuPapel: "Compreensão da proposta do cliente e transformação em estratégia, com roteiro, animação, decupagem, edição e sonorização.",
    ferramentas: ["Illustrator", "After Effects", "Premiere Pro"],
    en: { titulo: "Record Giveaway, Vloot Discos", formato: "Giveaway video", ideia: "Corporate video launching a giveaway for Vloot Discos, timed with the upcoming Offspring show in Brazil. The piece was designed to catch attention and encourage people to take part.", meuPapel: "Understanding the client's proposal and turning it into a strategy, with scriptwriting, animation, logging, editing and sound design." }
  },

  /* ---------------- REELS & VÍDEOS VERTICAIS ---------------- */
  {
    id: "reel-beira-mar-programas",
    titulo: "Reels Rádio Beira Mar",
    cliente: "Rádio Beira Mar",
    categoria: "reels",
    formato: "Reels",
    capa: "assets/capas/reel-beira-mar-programas.jpg",
    youtubeId: "GAryYJH2lWE",
    vertical: true,
    ideia: "Reels para as redes sociais que mostra o dia a dia da Rádio Beira Mar, seus programas e os conteúdos publicados pela emissora.",
    meuPapel: "Seleção das imagens, roteiro, montagem, edição e sonorização.",
    ferramentas: ["Photoshop", "Premiere Pro"],
    en: { titulo: "Reels, Rádio Beira Mar", formato: "Reels", ideia: "Reels for social media showing the daily life of Rádio Beira Mar, its programs and the content the station publishes.", meuPapel: "Selecting footage, scriptwriting, assembly, editing and sound design." }
  },
  {
    id: "reel-beira-mar-led",
    titulo: "Painel de LED Rádio Beira Mar",
    cliente: "Rádio Beira Mar",
    categoria: "reels",
    formato: "Painel de LED",
    capa: "assets/capas/reel-beira-mar-led.jpg",
    youtubeId: "a7mcHhhmAHY",
    vertical: false,
    ideia: "Vídeo pensado para dois usos: redes sociais e painel de LED no centro de Ubatuba. A peça precisava chamar a atenção de quem passa pela rua e entregar uma informação rápida e fácil sobre a Rádio Beira Mar, no litoral.",
    meuPapel: "Compreensão da comunicação da rádio e desenvolvimento das peças com uma identidade mais agressiva, incluindo roteiro, animação, montagem e sonorização.",
    ferramentas: ["Photoshop", "Illustrator", "After Effects", "Premiere Pro"],
    en: { titulo: "LED Panel, Rádio Beira Mar", formato: "LED panel", ideia: "Video designed for two uses: social media and an LED panel in downtown Ubatuba. It had to catch the attention of people passing on the street and deliver quick, easy information about Rádio Beira Mar, on the coast.", meuPapel: "Understanding the station's communication and developing the pieces with a more aggressive identity, including script, animation, assembly and sound design." }
  },
  {
    id: "reel-gs2",
    titulo: "Assinatura Animada GS2",
    cliente: "GS2 Marketing",
    categoria: "reels",
    formato: "Assinatura animada",
    capa: "assets/capas/reel-gs2.jpg",
    youtubeId: "n2L88xg8W6Q",
    vertical: true,
    ideia: "Assinatura animada inspirada no logotipo da GS2, formado por matrioscas: uma boneca se encaixa na outra e, em seguida, se transforma no logotipo da marca. Foi criada para fechar todos os vídeos publicados nas redes sociais.",
    meuPapel: "Compreensão da comunicação da marca e estudo do logotipo, com criação dos desenhos, animações, montagem, edição e sonorização.",
    ferramentas: ["Illustrator", "After Effects", "Premiere Pro"],
    en: { titulo: "Animated Signature, GS2", formato: "Animated signature", ideia: "Animated signature inspired by the GS2 logo, made of matryoshka dolls: one doll fits into the other and then turns into the brand's logo. It was created to close every video published on social media.", meuPapel: "Understanding the brand's communication and studying the logo, creating the drawings and animations, assembly, editing and sound design." }
  },
  {
    id: "reel-ego-corp",
    titulo: "Reels Ads Ego Corp",
    cliente: "EGO Corp",
    categoria: "reels",
    formato: "Institucional",
    capa: "assets/capas/reel-ego-corp.jpg",
    youtubeId: "sS9inCa-bYQ",
    vertical: true,
    ideia: "Reels em formato de anúncio para a Ego Corp, rápido, didático e ilustrativo, que apresenta todos os serviços oferecidos pela empresa.",
    meuPapel: "Compreensão dos serviços e da mensagem do anúncio, separação dos materiais, animação de objetos e elementos, decupagem, edição, montagem e sonorização.",
    ferramentas: ["Illustrator", "After Effects", "Premiere Pro"],
    en: { titulo: "Reels Ads, Ego Corp", formato: "Corporate", ideia: "Ad-format Reels for Ego Corp: fast, didactic and illustrative, presenting every service the company offers.", meuPapel: "Understanding the services and the ad's message, organizing the materials, animating objects and elements, logging, editing, assembly and sound design." }
  },
  {
    id: "reel-ezaki",
    titulo: "Reels Ezaki",
    cliente: "Ezaki Ar Condicionados",
    categoria: "reels",
    formato: "Institucional",
    capa: "assets/capas/reel-ezaki.jpg",
    youtubeId: "VCe4kHyk5mk",
    vertical: true,
    ideia: "Reels de apresentação da Ezaki para as redes sociais da empresa. A peça ajuda os clientes a entender como funciona o processo, com o cuidado, a segurança e a manutenção corretas do ar-condicionado.",
    meuPapel: "Compreensão da comunicação e da identidade visual da empresa, com roteiro, edição, montagem e sonorização.",
    ferramentas: ["Photoshop", "Premiere Pro"],
    en: { titulo: "Reels, Ezaki", formato: "Corporate", ideia: "Introduction Reels for Ezaki's social media. It helps customers understand how the process works, with the right care, safety and maintenance for their air conditioner.", meuPapel: "Understanding the company's communication and visual identity, with scriptwriting, editing, assembly and sound design.", cliente: "Ezaki Air Conditioning" }
  },
  {
    id: "reel-artcolor-haus-decor",
    titulo: "Reels Evento Haus Decor 2027",
    cliente: "Art Color Texturas",
    categoria: "reels",
    formato: "Divulgação de evento",
    capa: "assets/capas/reel-artcolor-haus-decor.jpg",
    youtubeId: "zktOOssP8N8",
    vertical: true,
    ideia: "Vídeo em estilo trailer de cinema que anuncia a participação da Artcolor no evento Haus Decor 2027.",
    meuPapel: "Compreensão do briefing e do roteiro, com montagem, edição e sonorização.",
    ferramentas: ["Photoshop", "Premiere Pro"],
    en: { titulo: "Reels, Haus Decor 2027 Event", formato: "Event promo", ideia: "Cinema-trailer-style video announcing Artcolor's participation in the Haus Decor 2027 event.", meuPapel: "Understanding the brief and script, with assembly, editing and sound design." }
  },
  {
    id: "reel-manza-led",
    titulo: "Painel de LED Manza Studio",
    cliente: "Manza Studio",
    categoria: "reels",
    formato: "Painel de LED",
    capa: "assets/capas/reel-manza-led.jpg",
    youtubeId: "fO8mQNxmA44",
    vertical: true,
    ideia: "Vídeo produzido em duas versões, vertical e horizontal, para as redes sociais e para um painel de LED instalado em um bairro nobre de São José dos Campos.",
    meuPapel: "Compreensão das informações e da comunicação do cliente, aplicação da identidade visual, ilustrações, animações, montagem, edição e sonorização.",
    ferramentas: ["Photoshop", "Premiere Pro"],
    en: { titulo: "LED Panel, Manza Studio", formato: "LED panel", ideia: "Video produced in two versions, vertical and horizontal, for social media and for an LED panel in an upscale neighborhood of São José dos Campos.", meuPapel: "Understanding the client's information and communication, applying their visual identity, illustrations, animations, assembly, editing and sound design." }
  },
  {
    id: "reel-sicoob",
    titulo: "Reels Ads Sicoob",
    cliente: "Sicoob",
    categoria: "reels",
    formato: "Ads",
    capa: "assets/capas/reel-sicoob.jpg",
    youtubeId: "2wS1pcEhAUE",
    vertical: true,
    ideia: "Vídeo em formato de anúncio para a Sicoob, que mostra as facilidades do serviço e os motivos para preferi-lo em relação à concorrência.",
    meuPapel: "Compreensão do que a marca queria comunicar, com montagem, animação, edição e sonorização.",
    ferramentas: ["Photoshop", "After Effects", "Premiere Pro"],
    en: { titulo: "Reels Ads, Sicoob", formato: "Ads", ideia: "Ad-format video for Sicoob that shows the convenience of its service and the reasons to choose it over the competition.", meuPapel: "Understanding what the brand wanted to communicate, with assembly, animation, editing and sound design." }
  },
  {
    id: "reel-vloot-jackpot",
    titulo: "Reels “Casino” Vloot",
    cliente: "VLOOT Discos",
    categoria: "reels",
    formato: "Reels · tema do mês",
    capa: "assets/capas/reel-vloot-jackpot.jpg",
    youtubeId: "74A1zD5XMcE",
    vertical: true,
    ideia: "Reels que apresenta o tema do mês da Vloot, cassino, no perfil da marca no Instagram.",
    meuPapel: "Desenvolvimento de uma identidade visual baseada no tema, separação dos materiais, montagem, edição e sonorização.",
    ferramentas: ["Photoshop", "After Effects", "Premiere Pro"],
    en: { titulo: "Reels “Casino”, Vloot", formato: "Reels · theme of the month", ideia: "Reels presenting Vloot's theme of the month, casino, on the brand's Instagram profile.", meuPapel: "Developing a visual identity based on the theme, organizing the materials, assembly, editing and sound design." }
  },
  {
    id: "reel-vloot-noir",
    titulo: "Reels “Noir” Vloot",
    cliente: "VLOOT Discos",
    categoria: "reels",
    formato: "Reels · tema do mês",
    capa: "assets/capas/reel-vloot-noir.jpg",
    youtubeId: "lc0qnXu8rOA",
    vertical: true,
    ideia: "Reels que apresenta o tema do mês da Vloot, noir, no perfil da marca no Instagram.",
    meuPapel: "Desenvolvimento de uma identidade visual baseada no tema, separação dos materiais, montagem, edição e sonorização.",
    ferramentas: ["Photoshop", "After Effects", "Premiere Pro"],
    en: { titulo: "Reels “Noir”, Vloot", formato: "Reels · theme of the month", ideia: "Reels presenting Vloot's theme of the month, noir, on the brand's Instagram profile.", meuPapel: "Developing a visual identity based on the theme, organizing the materials, assembly, editing and sound design." }
  }
];

/* Sequência do "Tour de 2 minutos": cinco peças de áreas diferentes. */
window.TOUR_PORTFOLIO = ["jp-ibope", "beira-mar-surf-pro", "planck-fisica", "reel-vloot-jackpot", "reel-ezaki"];
