module.exports = (function() {
    var Film = require('./Film_model.js');

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
    return {
        getAll: getAll
    }

})();