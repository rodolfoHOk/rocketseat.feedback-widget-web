# Feedback Widget - Front-End WEB

> Projeto criado durante o evento NLW Return da RocketSeat

## Guia

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

## Break:

aula 1: 1:18:00
