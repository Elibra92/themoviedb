module.exports = (function() {
    var Genere = require('./generi_model.js');
    
    var generi_getAll = function(req,res) { 
        Genere.find()
            .exec()
            .then(function(generi) {
                res.status(200).json(generi);
                
               
            })
            .catch(function(err) {
                res.status(500).send(err);
            })

    }

    var insertOne = function(req,res) {
        var nuovoGenere = new Genere(req.body);
            nuovoGenere.save()
            .then(function(genere) {
                // console.log ('Film salvato');
                res.status(200).json(genere).end()
            })
            .catch(function(err) {
                res.status(500).send(genere);
            })
    }

    var deleteOne = function(req,res) {
        Genere.findById(req.params.id)
            .exec()
            .then(function(genere) {
                // console.log('genere rimosso')
                return genere.remove();
            })
            .then(function(genere) {
                // console.log(req.params.id + 'rimosso dal db');
                res.status(200).json(genere);
            })
            .catch(function(err) {
                res.status(500).send(err);
            })
    }

    var updateGenere = function(req,res) {
        Genere.findByIdAndUpdate(req.params.id, {$set: req.body})
        .exec()
        .then(function (genere) {
            // console.log('genere aggiornato');
            res.status(200).json(genere);
        })
        .catch(function (err) {
            res.status(500).send(err);
        });
    }
    
    return {
        generi_getAll: generi_getAll,
        insertOne: insertOne,
        deleteOne : deleteOne,
        updateGenere: updateGenere
    }

})();