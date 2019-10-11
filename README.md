É necessário instalar todas dependências do projeto para que funcione bem,
após baixar o projeto realize o seguinte comando.

## yarn install / npm install

Para rodar o projeto é bastante simples basta rodar o seguinte comando

## yarn dev / npm dev

a aplicação vai estar rodando pronta para receber requisições no seguinte endereço:

## http://localhost:3333/

Rotas

## POST /movies
    campos: 
        thumbnail: String,
        nome: String,
        sinopse: String,
        situacao: String,
        idioma: String,
        duracao: String,
        orcamento: Number,
        receita: Number,
        lucro: Number,
        generos: [String],
        movie: String,
        pontuacao: String,
        data_lancamento: String,


## GET /movies
    campo:
        nome

## GET /details
    campo:
        movie_id