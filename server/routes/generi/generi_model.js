var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var generiSchema = new Schema ( {
    _id : Schema.Types.ObjectId,
    
    // id: {
    //         type: Number,
    //         required: true
    //      },
    name : {
        type: String,
        required: true
    },
    
});

var Genere = mongoose.model('generi', generiSchema);

module.exports = Genere;