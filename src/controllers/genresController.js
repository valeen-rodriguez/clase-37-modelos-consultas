const db = require('../database/models')

let genresController = {
    list: (req, res) => {
        db.Genre.findAll()
        .then(function(genres) {
            res.render('genresList',{genres: genres})
        })
        .catch(error => {
            res.send(error)
        })
    },
    detail: (req,res) => {
        const {id} = req.params
        db.Genre.findByPk(id)
        .then(function(genres) {
            res.render('genresDetail', {genres: genres})
        })
        .catch(error => {
            res.send(error)
        })
    }
}

module.exports = genresController;