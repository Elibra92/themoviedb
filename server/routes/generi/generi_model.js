var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var generiSchema = new Schema ( {
        Id : Number,
        name : {
        type: String,
        required: true
    },
    
});

var Genere = mongoose.model('generi', generiSchema);

module.exports = Genere;