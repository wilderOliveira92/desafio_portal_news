# API Agricultura

CRUD Agricultura

## Installation

Executar o  comando: `yarn` ou `npm i`

## Required

Você deve ter o postegresql instalado e executando para rodar o projeto.
Alterar o campo HOST no arquivo `ormconfig.json` e `config/database/database.ts` caso não esteja rodando no localhost.

## Execution

Para montar estrutura e carregar dados iniciais, executar o comando:

`yarn migration:run` ou `npm run migration:run`

### yarn dev:server

Para executar a aplicação, executar o comando:

```
yarn dev:server
```

O servidor estará disponível no caminho: `http://localhost:3000 `

## License
[MIT](https://choosealicense.com/licenses/mit/)
