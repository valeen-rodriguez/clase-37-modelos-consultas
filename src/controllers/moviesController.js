const db = require('../database/models');

let moviesController = {
    list: (req, res) => {
        db.Movies.findAll()
        .then(function(movies) {
            res.render('moviesList', { movies: movies });
        })
        .catch(error => {
            res.send(error);
        });
    },
    detail: (req, res) => {
        const { id } = req.params;
        db.Movies.findByPk(id)
        .then(function(movies) {
            res.render('moviesDetail', { movies: movies });
        })
        .catch(error => {
            res.send(error);
        });
    },
    new: (req, res) => {
        db.Movies.findAll({
            order: [
                ['release_date', 'DESC'],
            ]
        })
        .then(function(movies) {
            res.render('newestMovies', { movies: movies });
        })
        .catch(error => {
            res.send(error);
        });
    },
    recommended: (req, res) => {
        db.Movies.findAll({
            order: [
                ['rating', 'DESC'],
            ],
            limit: 5
        })
        .then(function(movies) {
            res.render('recommendedMovies', { movies: movies });
        })
        .catch(error => {
            res.send(error);
        });
    }
}

module.exports = moviesController;