module.exports = (function() {
    var Genere = require('./generi_model.js');
    
    var generi_getAll = function(req,res) { 
        Genere.find()
            .exec()
            .then(function(generi) {
                res.status(200).json(generi);
                console.log(generi.name)
            })
            .catch(function(err) {
                res.status(500).send(err);
            })

    }

    
    

})();