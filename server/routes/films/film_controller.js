module.exports = (function() {
    var Film = require('./Film_model.js');
    var path = require('path');

    var Genere = require(path.join(__dirname, '..', 'generi', 'generi_model.js'));
    
    
    var getAll = function(req,res) {
        Film.find()
            .sort({vote_count: -1})
            .populate({path:'nuovo_generi', select: 'name -_id'})
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
            nuovoFilm.save()
            .then(function(film) {
                console.log ('Film salvato');
                res.status(200).json(film).end()
            })
            .catch(function(err) {
                res.status(500).send(err);
            })
    }


    var deleteOne = function(req,res) {
        Film.findById(req.params.id)
            .exec()
            .then(function(film) {
                console.log('film rimosso')
                return film.remove();
            })
            .then(function(film) {
                console.log(req.params.id + 'rimosso dal db');
                res.status(200).json(film);
            })
            .catch(function(err) {
                res.status(500).send(err);
            })
    }

    var updateFilm = function(req,res) {
        Film.findByIdAndUpdate(req.params.id, {$set: req.body})
        .exec()
        .then(function (film) {
            console.log('film aggiornato');
            res.status(200).json(film);
        })
        .catch(function (err) {
            res.status(500).send(err);
        });
    }

    var updateVote = function(req,res) {
            Film.findById(req.params.id)
            .exec()
            .then(function (film) {
                var count= film.vote_count;
                    console.log(count);
                var voti= count+1;
                    console.log(voti);
                var media= film.vote_average;
                    console.log(media);
                var nuovovoto=req.body.voto_nostro;
                    console.log(nuovovoto);
                var calcolo= ((media*count)+nuovovoto)/voti;
                    console.log(calcolo);
                film.vote_average=calcolo;
                film.vote_count=voti;
                return film.save();
              
            })
            .then(function(film){
                res.status(200).json(film);
            })
          
            .catch(function (err) {
                res.status(500).send(err);
            });
        }



    return {
        getAll: getAll,
        getOne: getOne,
        getByQuery: getByQuery,
        insertOne: insertOne,
        deleteOne : deleteOne,
        updateFilm: updateFilm,
        updateVote: updateVote
    }

})();