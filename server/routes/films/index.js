var express = require('express');
var filmController = require('./film_controller.js')

var films = express.Router();    //sto creando una rotta(gestore della rotta)   //routes per avere + rotte --> var films e var tv

films.get('/', filmController.getAll);


films.get('/:id', (req, res) => {
    res.send('film con id:' + req.params.id);
})



films.post('/', (req,res) =>  {
    var film = req.body.titolo;                //body è tutto l'oggetto, se voglio una delle proprietà scrivo req.body.title
    console.log(film);
    res.send(film);
})

module.exports = films;