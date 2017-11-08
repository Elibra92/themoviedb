var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var path = require('path');
var Genere = require(path.join(__dirname, '..', 'generi', 'generi_model.js'));

var filmSchema = new Schema ( {
    vote_count : {
        type: Number,
        required: true
    },
    video: {
        type: Boolean,
        required: true
    },
    vote_average : {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    popularity : {
        type:Number,
        required: true
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
        required: true,
    },
    genre_ids: {
        type: [Schema.Types.ObjectId], 
        ref: 'Genere',
    },
        // type: [Number],          esempio di required con array
        // required:true,
    
    backdrop_path: {
        type: String
    },
    adult: {
        type: Boolean,
        required: true
    },
    overview : {
        type: String,
        required:true,
    },
    release_date : {
        type: Date,
        required: true
    }
});

var Film = mongoose.model('movie', filmSchema);
module.exports = Film;