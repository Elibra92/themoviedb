var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;


var filmSchema = new Schema ( {
    vote_count : {
        type: Number,
        // required: true
    },
    video: {
        type: Boolean,
        required: true
    },
    vote_average : {
        type: Number,
        // required: true
    },
    title: {
        type: String,
        required: true,
    },
    popularity : {
        type:Number,
        // required: true
    },
    poster_path: {
        type: String,
    },
    original_language : {
        type: String,
        required: true,
    },
    original_title : {
        type: String,
        // required: true,
    },
    genre_ids: {
        type: [Number],          //esempio di required con array
        // required:true,
    },
       
    
    backdrop_path: {
        type: String
    },
    adult: {
        type: Boolean,
        // required: true
    },
    overview : {
        type: String,
        required:true,
    },
    release_date : {
        type: Date,
        // required: true
    }
}, {toJSON : { virtuals: true}
});

    filmSchema.virtual('nuovo_generi', {
        ref: 'generi',
        localField: 'genre_ids',
        foreignField: 'id',
        justOne: false
    })


var Film = mongoose.model('movie', filmSchema);
module.exports = Film;