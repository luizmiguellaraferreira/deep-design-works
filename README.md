# Web Creation — Portfólio futurista

Site institucional da marca **Web Creation**, especializada na criação de sites para
empresas, pequenos negócios e profissionais autônomos.

Feito com **React + TypeScript + Vite** e CSS moderno (sem frameworks pesados).
Ícones: [Lucide](https://lucide.dev).

## Como executar

Pré-requisito: [Node.js LTS](https://nodejs.org) instalado.

```bash
npm install   # instala as dependências (só precisa na primeira vez)
npm run dev   # abre o site em http://localhost:5173
```

Outros comandos:

```bash
npm run build    # gera a versão final na pasta `dist/`
npm run preview  # visualiza localmente a versão final
```

## Como publicar

1. Rode `npm run build`.
2. Publique o conteúdo da pasta `dist/` em qualquer hospedagem estática
   (Vercel, Netlify, GitHub Pages, Hostinger etc.).
3. Como o projeto usa caminhos relativos (`base: './'` no `vite.config.ts`),
   funciona até em subpastas, sem configuração extra.

## Onde fica cada coisa

| Arquivo / pasta              | O que é                                                      |
| ---------------------------- | ------------------------------------------------------------ |
| `index.html`                 | Título, descrição, metadados de compartilhamento e fontes    |
| `src/config/site.ts`         | **Dados editáveis**: textos, WhatsApp, Instagram, navegação  |
| `src/App.tsx`                | Composição do site (lista das seções)                        |
| `src/components/`            | Um arquivo por seção: `Navbar`, `Hero`, `About`, `Portfolio`, `Services`, `Process`, `Contact`, `Footer` (+ `Reveal`, a animação de entrada) |
| `src/index.css`              | Todo o visual: cores, botões, responsivo e animações         |
| `public/videos/hero.mp4`     | Vídeo de fundo da abertura (opcional — veja abaixo)          |

## Como alterar os dados de contato

Abra `src/config/site.ts` e edite:

```ts
whatsapp: "5511999999999",                    // só números, com país + DDD
instagram: "https://instagram.com/seu.perfil",
```

- **WhatsApp vazio** → o botão “Solicitar orçamento” abre um modelo de
  mensagem pronto para copiar (nenhum link inválido é gerado).
- **WhatsApp preenchido** → o botão vira link direto (`wa.me`) com a mensagem pronta.
- **Instagram vazio** → o botão do Instagram nem aparece. Preencha para exibir.

## Vídeo da abertura

Coloque um arquivo chamado exatamente `hero.mp4` em `public/videos/`.

- O site detecta sozinho: se o arquivo existir, vira fundo da primeira tela
  (sem áudio, em loop); se não existir, um fundo animado em CSS assume.
- Recomendado: 10–20 segundos, 720p ou 1080p, H.264 compactado para web.

## Projetos do portfólio

- **Reddart** é um projeto real e publicado: o cartão mostra a foto
  (`public/images/reddart.png`, `.jpg` ou `.webp`) e o botão “Visitar site”
  abre `https://reddart.hubsapiens.com.br` em nova aba. Para trocar a foto,
  basta salvar a nova imagem com o mesmo nome. Sem a foto, um mock em CSS
  aparece automaticamente.
- **Burger District** e **Atelier Dolce** são **conceituais** — servem para
  demonstrar possibilidades e não representam clientes reais. Cada cartão abre
  uma **demonstração funcional** (cardápio com pedido simulado e catálogo com
  encomenda), toda implementada em `src/components/Portfolio.tsx`.

## Acessibilidade e desempenho

- HTML semântico, navegação por teclado e foco visível.
- Respeito a `prefers-reduced-motion` (animações desativadas quando o sistema pede).
- Sem imagens externas: todas as prévias são desenhadas em CSS — nada quebra offline.
- Efeitos leves em CSS; nenhuma biblioteca de animação.
