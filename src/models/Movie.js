const mongoose = require('mongoose');

const MovieSchemma = new mongoose.Schema({
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

}, {
    toJSON: {
        virtuals: true
    }
});

MovieSchemma.virtual('thumbnail_url').get(function(){
    return `http://localhost:3333/files/${this.thumbnail}`;
})
module.exports = mongoose.model('Movie', MovieSchemma);