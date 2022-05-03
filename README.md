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

- Configurando o tailwind CSS

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

- Popover do Headless UI informações

        Utilizamos para fornecer acessibilidade ao componente Widget ao abrir e fechar
        Ele adiciona os atributos aria aos componentes HTML e a funcionalidade de abrir e fechar
        Link para documentação do Popover: https://headlessui.dev/react/popover

## Links úteis

- [Phosphor Icons](https://phosphoricons.com/) | [Phosphor Icons Github](https://github.com/phosphor-icons/phosphor-home) : Família de ícones flexível para interfaces, diagramas, apresentações — o que for, na verdade.

- [Headless UI](https://headlessui.dev/) : Componentes de interface do usuário totalmente sem estilo e totalmente acessíveis, projetados para se integrar perfeitamente ao Tailwind CSS.

- [AriaKit | Reakit](https://reakit.io/) : Crie aplicativos web ricos e acessíveis com React.

- [Radix UI](https://www.radix-ui.com/) : Componentes acessíveis e sem estilo para criar sistemas de design e aplicativos da Web de alta qualidade no React.
