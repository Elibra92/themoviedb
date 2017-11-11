var express = require('express');
var app = express();   // inizializzo l'applicazione
const PORT = process.env.PORT || 3000;          //variabile d'ambiente

require('./db.js');        //includiamo il file db.js
require('./routes')(app, express);  //ho incluso la cartella routes dentro al server js


app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
});

//il server rimane in ascolto su porta specificata in attesa di connessione da parte del client
//di solito si mette sempre nel file del server

