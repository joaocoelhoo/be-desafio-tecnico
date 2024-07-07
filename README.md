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

## Executando o Mock da API

Para rodar um mock da API localmente utilizando o `json-server`, execute o comando:

```bash
npm run server
```

Isso iniciará o `json-server` na porta 3000.

## Iniciando a Aplicação

Para iniciar a aplicação, você precisará escolher uma porta diferente, pois a porta 3000 será utilizada pelo `json-server`. Execute o comando abaixo para iniciar a aplicação:

```bash
npm run start
```

## Executando os Testes

Os testes foram escritos utilizando Jest e React Testing Library. Para rodar os testes, utilize o comando:

```bash
npm run test
```

Isso executará todos os testes definidos no projeto e exibirá os resultados no terminal.
