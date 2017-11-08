module.exports = (function() {
    var Film = require('./Film_model.js');
    var path = require('path');

    var Genere = require(path.join(__dirname, '..', 'generi', 'generi_model.js'));
    
    
    var getAll = function(req,res) {
        Film.find()
       
            .exec()
            .then(function(films) {
                res.status(200).json(films);
                
            })
            .catch(function(err) {
                res.status(500).send(err);
            })

    }

    var getOne = function(req,res) {
        Film.findById(req.params.id)
            .exec()
            .then(function(film) {
                res.status(200).json(film);
            })
            .catch(function(err) {
                res.status(500).send(err);
            })
            
    }

    var getByQuery = function(req,res) {
        Film.find({title: req.query.title})
            .exec()
            .then(function(film) {
                res.status(200).json(film);
            })
            .catch(function(err) {
                res.status(500).send(err);
            })
    }

    var insertOne = function(req,res) {
        var nuovoFilm = new Film(req.body);
            nuovoFilm.save(function(err) {
                res.status(500).json(err);
            })
            .then(function() {
                console.log ('Film salvato');
            })
            .catch(function(err) {
                throw err;
            })
    }

    var getAll_film_generi = function(req,res) {
        Film.find()
            .populate('Genere')
           
            .exec()
            .then(function(films) {
                res.status(200).json(films);
        
            })
            .catch(function(err) {
                res.status(500).send(err);
            })

    }

    return {
        getAll: getAll,
        getOne: getOne,
        getByQuery: getByQuery,
        insertOne: insertOne,
        getAll_film_generi : getAll_film_generi
    }

})();