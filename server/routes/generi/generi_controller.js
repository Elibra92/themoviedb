module.exports = (function() {
    var Genere = require('./generi_model.js');
    
    var generi_getAll = function(req,res) { 
        Genere.find({},'name -_id')
            .exec()
            .then(function(generi) {
                res.status(200).json(generi);
                console.log(generi.name)
            })
            .catch(function(err) {
                res.status(500).send(err);
            })

    }

    
        Genere.findOneAndUpdate("Azione/Poliziesco", {name: "Azione"})
        .exec()
        .then(function(genere) {
            console.log('Genere aggiornato');
        })
        .catch(function(err) {
            throw err;
        })
    
    return {
        generi_getAll: generi_getAll,
        
    }

})();