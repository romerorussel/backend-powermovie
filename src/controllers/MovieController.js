const Movie = require('../models/Movie');

module.exports = {
    async index(req, res){
        const { movie_id } = req.query;
        const movieDetails = await Movie.findById({ _id: movie_id});
        

        return res.json(movieDetails);
    },

    async store(req, res){
        const { filename } = req.file;
        const { nome, sinopse, situacao, idioma, duracao, orcamento, receita, lucro, generos, movie, pontuacao, data_lancamento} = req.body;

        const movies = await Movie.create({
            thumbnail: filename,
            nome,
            sinopse,
            situacao,
            idioma,
            duracao,
            orcamento,
            receita,
            lucro,
            pontuacao,
            generos: generos.split(',').map(genero => genero.trim()),
            movie,
            data_lancamento
        });

        return res.json(movies);
    },

    async show(req, res){
        const nome = req.headers.filters;

        var movies;

        if(nome){
            movies = await Movie.find({nome});
        }if(!nome){
            movies = await Movie.find();
        }
        return res.json(movies);
    }
}