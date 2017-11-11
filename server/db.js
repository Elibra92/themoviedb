var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/testo',
mongoose.connect('mongodb://db_movie:ligabue92@ds255455.mlab.com:55455/themoviedb',
{useMongoClient:true},
function(err) {
    if (err){ console.log(err)}
    else {
        console.log('connesso al db testo');
    }
});