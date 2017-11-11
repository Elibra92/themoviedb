var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var path = require('path');
var Film= require(path.join(__dirname, '..', 'films', 'film_model.js'));

var generiSchema = new Schema ( {
        id:{
            type: Number
        },
        name : {
        type: String,
        required: true
    },
    
});


generiSchema.post('remove', function (genere) {
    console.log("ciao",genere.id);
    console.log('ciao2', genre_ids );
    Film.update({},{
      $pull:{genre_ids: parseInt(genere.id)}
    }).
    exec();
  });

var Genere = mongoose.model('generi', generiSchema);

module.exports = Genere;