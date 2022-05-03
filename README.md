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

## 🖼️ Imagens do projeto 👀

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/rocketseat-feedback-widget-01.png" alt="NLW Return Img1" width="450"/>

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/rocketseat-feedback-widget-02.png" alt="NLW Return Img2" width="450"/>

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/rocketseat-feedback-widget-03.png" alt="NLW Return Img3" width="450"/>

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/rocketseat-feedback-widget-04.png" alt="NLW Return Img4" width="450"/>

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/rocketseat-feedback-widget-05.png" alt="NLW Return Img5" width="450"/>

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/rocketseat-feedback-widget-06.png" alt="NLW Return Img6" width="450"/>

## 🔗 Links úteis ✨

- [Phosphor Icons](https://phosphoricons.com/) | [Phosphor Icons Github](https://github.com/phosphor-icons/phosphor-home) : Família de ícones flexível para interfaces, diagramas, apresentações — o que for, na verdade.

- [Headless UI](https://headlessui.dev/) : Componentes de interface do usuário totalmente sem estilo e totalmente acessíveis, projetados para se integrar perfeitamente ao Tailwind CSS.

- [AriaKit | Reakit](https://reakit.io/) : Crie aplicativos web ricos e acessíveis com React.

- [Radix UI](https://www.radix-ui.com/) : Componentes acessíveis e sem estilo para criar sistemas de design e aplicativos da Web de alta qualidade no React.

## 🔥 Repositórios da NLW Return 🫶

- [Front-End WEB](https://github.com/rodolfoHOk/rocketseat.feedback-widget-web)

- [Back-End]() - em breve

- [Mobile]() - em breve

- [Design no Figma](https://www.figma.com/community/file/1102912516166573468/Feedback-Widget)
