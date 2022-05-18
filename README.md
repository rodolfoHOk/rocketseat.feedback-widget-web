# 🚀 Feedback Widget - Front-End WEB 🚀

> Projeto criado durante o evento NLW Return da RocketSeat

## 👨‍💻 Tecnologias e bibliotecas utilizadas 👩‍💻

- Javascript / Typescript : Linguagem programação
- Vite : Ferramenta de criação de Front-end
- React : Biblioteca criação de interfaces
- Tailwind CSS : Framework css
- Headless UI : Componentes de UI sem estilos e completamente acessíveis (acessibilidade)

## 🗃️ Guia 📚

- Criando o projeto com Vite:

        npm create vite@latest
        Ok to proceed? y
        Select a framework: react
        Select a variant: react-ts

        yarn install or npm install

- Configurando o tailwind CSS (tailwindcss postcss autoprefixer)

        yarn add -D tailwindcss postcss autoprefixer

        npx tailwindcss init -p

        editar o arquivo: tailwind.config.js
        substituindo content por: content: ["./src/**/*.tsx"],

        criar arquivo global.css
        adicionar nele:
          @tailwind base;
          @tailwind components;
          @tailwind utilities;

        importar o arquivo global.css no main.tsx

- Phosphor Icons (phosphor-react)

        Biblioteca de ícones

- Popover do Headless UI (@headlessui/react)

        Utilizamos para fornecer acessibilidade ao componente Widget ao abrir e fechar
        Ele adiciona os atributos aria aos componentes HTML e a funcionalidade de abrir e fechar
        Link para documentação do Popover: https://headlessui.dev/react/popover

- Tailwind CSS Forms (@tailwindcss/forms)

        Plugin do Tailwind de estilização de formulários

- Tailwind Scrollbar (tailwind-scrollbar)

        Plugin para adicionar ao Tailwind estilização do scrollbar

- HTML 2 Canvas (html2canvas)

        Biblioteca que utilizamos para tirar screenshot da página do browser

- Usar font Inter do Google fonts

        no arquivo global.css adicionar no começo:
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Lato:ital,wght@0,400;0,700;1,400&family=Rubik+Beastly&display=swap');
        e adicionar ao body @apply font-Inter

        no arquivo tailwind.config.js adicionar no theme.extend:
        fontFamily: { Inter: ['Inter'], },

- Usar dark mode manual com Tailwind CSS

        no arquivo tailwind.config.js adicionar no module.exports:
        darkMode: 'class',

        na tag html precisa adicionar a classe dark exemplo:
        modo dark: <html lang="en" class="dark">...</html>
        modo light: <html lang="en">...</html>

        nas estilizações adicionar a variante dark exemplo:
        <div class="bg-white dark:bg-zinc-900">...</div>

## ➕ O que fiz além ✨

- Tema Light (Claro) seguindo o layout do Figma

- Contexto de tema claro e escuro com botões para mudar entre eles no cabeçalho

- Contexto de autenticação, página de login e botão/menu de área de login no cabeçalho

- Página listagem de feedbacks com paginação

- Header responsivo com menu hambúrguer em mobile

- Validação de campos e erros com mensagens/notificações de erros em tela

- Adicionado data de criação do feedback na listagem, lista vem em ordem decrescente por data criação

- Marcação de feedback com status: pendente, em análise, rejeitado ou resolvido.

- Filtro por status para listagem de feedbacks

## 🖼️ Imagens do projeto 👀

Feedback Widget fechado:

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/feedget-01.png" alt="NLW Return Img1" width="450"/>

Feedback Widget aberto:

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/feedget-02.png" alt="NLW Return Img2" width="450"/>

Feedback Widget ao selecionar Ideia:

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/feedget-03.png" alt="NLW Return Img3" width="450"/>

Feedback Widget aberto tema light:

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/feedget-04.png" alt="NLW Return Img4" width="450"/>

Tela de login social com github ou google ou facebook:

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/feedget-05.png" alt="NLW Return Img5" width="450"/>

Mensagem de erro:

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/feedget-06.png" alt="NLW Return Img6" width="450"/>

Tela de feedbacks:

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/feedget-07.png" alt="NLW Return Img7" width="450"/>

Tela de feedbacks detalhe da paginação:

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/feedget-08.png" alt="NLW Return Img8" width="450"/>

Tela de feedbacks com tema light:

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/feedget-09.png" alt="NLW Return Img9" width="450"/>

Responsividade mobile com tema light detalhe menu hambúrguer:

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/feedget-10.png" alt="NLW Return Img10" width="250"/>

Responsividade mobile com tema light menu aberto:

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/feedget-11.png" alt="NLW Return Img11" width="250"/>

Responsividade mobile com tema light tela de feedbacks:

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/feedget-12.png" alt="NLW Return Img12" width="250"/>

Responsividade mobile com tema light tela de feedbacks filtro de busca aberto:

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/feedget-13.png" alt="NLW Return Img13" width="250"/>

Responsividade mobile com tema light tela de login :

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/feedget-14.png" alt="NLW Return Img14" width="250"/>

Responsividade mobile com tema dark widget aberto:

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/feedget-15.png" alt="NLW Return Img15" width="250"/>

## 🔗 Links úteis ✨

- [Phosphor Icons](https://phosphoricons.com/) | [Phosphor Icons Github](https://github.com/phosphor-icons/phosphor-home) : Família de ícones flexível para interfaces, diagramas, apresentações — o que for, na verdade.

- [Headless UI](https://headlessui.dev/) : Componentes de interface do usuário totalmente sem estilo e totalmente acessíveis, projetados para se integrar perfeitamente ao Tailwind CSS.

- [AriaKit | Reakit](https://reakit.io/) : Crie aplicativos web ricos e acessíveis com React.

- [Radix UI](https://www.radix-ui.com/) : Componentes acessíveis e sem estilo para criar sistemas de design e aplicativos da Web de alta qualidade no React.

## 🚀 Deploy 🔥

- Front-End WEB Vercel: https://rocketseat-feedback-widget-web.vercel.app/

## 🔥 Repositórios da NLW Return 🫶

- [Front-End WEB](https://github.com/rodolfoHOk/rocketseat.feedback-widget-web)

- [Back-End](https://github.com/rodolfoHOk/rocketseat.feedback-widget-server)

- [Mobile](https://github.com/rodolfoHOk/rocketseat.feedback-widget-mobile)

- [Design no Figma](https://www.figma.com/community/file/1102912516166573468/Feedback-Widget)
