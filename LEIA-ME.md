# Portfólio Felipe Piccinato — prévia

Abra `index.html` no navegador (clique duplo). Não precisa instalar nada.

## Como completar cada peça
Todos os textos e dados ficam em `js/projetos.js`. Para cada projeto:

- `videoUrl`: link do vídeo completo. Aceita .mp4/.webm (coloque o arquivo em `assets/videos/`),
  YouTube (`https://www.youtube.com/embed/ID`) ou Vimeo (`https://player.vimeo.com/video/ID`).
  Sem link, o site mostra a capa.
- `meuPapel`: uma frase sobre o que você fez na peça. Quando preenchido, aparece o bloco "Meu papel".
- `ideia` e `destaques`: textos escritos a partir das capas. Ajuste o que não bater com a realidade.

## Para trocar capas por versões melhores
Substitua os arquivos em `assets/capas/` mantendo o nome (proporção ideal 4:3, mínimo 1200px).

## Tour de 2 minutos
As 3 peças do tour estão em `TOUR_PORTFOLIO`, no final de `js/projetos.js`.

## Publicar
Qualquer hospedagem estática serve (Netlify, Vercel, GitHub Pages). Suba a pasta `site` inteira.

## Onde editar o que mudou na última rodada
- Mascote do topo: `assets/marca/mascote.png` (transparente). Versão clara para fundos escuros: `mascote-claro.png`.
- Números do hero (`index.html`): "+10 anos" e "+150 clientes" ficam nos atributos `data-contar`. O número de peças acompanha sozinho a quantidade de projetos em `js/projetos.js`.
- Grade de trabalhos: mostra 6 peças e o botão "+" carrega as demais. O limite está em `LIMITE_INICIAL`, no início de `js/main.js`.
- Ferramentas: ícones em SVG dentro de `index.html` (seção Sobre).

## Vídeos (YouTube)
- Cada peça tem `youtubeId` em `js/projetos.js`. Os 10 vídeos verticais ficam na aba "Reels" (`categoria: "reels"`, `vertical: true`).
- IMPORTANTE: o player do YouTube não funciona abrindo o `index.html` com clique duplo (erro 153). Ele funciona normalmente com o site publicado (Netlify, Vercel, GitHub Pages) ou num servidor local: na pasta `site`, rode `python -m http.server 8000` e abra http://localhost:8000.
- Novos clientes entram sozinhos nos filtros: basta usar o mesmo nome em `cliente`.

## Idioma (português / inglês)

- O seletor PT | EN fica no menu. A escolha fica salva no navegador. Sem escolha anterior, navegador em português abre em português e qualquer outro abre em inglês.
- Link direto em inglês: `?lang=en` no final do endereço (por exemplo `https://piccinato.vercel.app/?lang=en`).
- Textos fixos do site: português no `index.html`, inglês em `js/idiomas.js` (`TEXTOS_EN`, mesma chave do `data-i18n`).
- Textos de cada peça em inglês: campo `en` de cada projeto em `js/projetos.js` (titulo, formato, ideia, meuPapel e, se preciso, cliente). Peça sem `en` aparece em português.
- No inglês, o botão do currículo baixa `assets/documentos/resume-felipe-piccinato-en.pdf`.
