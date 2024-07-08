# Desafio Front-end Be

Este é um projeto React desenvolvido com TypeScript. Ele utiliza Node.js versão 20. Para rodar este projeto localmente, siga as instruções abaixo.

## Requisitos

- Node.js versão 20
- npm (gerenciador de pacotes do Node.js)

## Instalação

Para instalar as dependências do projeto, execute os seguintes comandos no diretório raiz do projeto:

```bash
nvm use
npm install
```

## Iniciando a Aplicação

Execute o comando abaixo para iniciar a aplicação:

```bash
npm run start
```

## Executando o Mock da API

Um mock da API é iniciado localmente utilizando o `json-server`, através do comando `npm run start`.

Caso necessite executar o `json-server` em paralelo, execute o seguinte comando:

```bash
npm run server
```

Isso iniciará o `json-server` na porta 3003.

## Executando os Testes

Os testes foram escritos utilizando Jest e React Testing Library. Para rodar os testes, utilize o comando:

```bash
npm run test
```

Isso executará todos os testes definidos no projeto e exibirá os resultados no terminal.

## Acessando a aplicação online

A aplicação está disponível através da url abaixo:

https://superb-crepe-09c9d2.netlify.app/

É preciso ter a API rodando localmente através do `json-server` para que a tabela seja populada.
