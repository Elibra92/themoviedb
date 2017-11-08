var express = require('express');
var filmController = require('./film_controller.js')

var films = express.Router();    //sto creando una rotta(gestore della rotta)   //routes per avere + rotte --> var films e var tv

films.get('/', filmController.getAll);
films.get('/:id([0-9a-f]{24})', filmController.getOne);   //espressione regolare che significa: da 0 a 9, da a a f, di 24 caratteri
films.get('/query', filmController.getByQuery)      //se tolgo l'espressione regolare, non entra dentro alla rotta/query ma dentro alla rotta /:id
films.post('/', filmController.insertOne)
films.delete('/:id([0-9a-f]{24})', filmController.deleteOne);       //per rimuovere fare la chiamata con il DELETE
films.put('/:id([0-9a-f]{24})', filmController.updateFilm);     //gli aggiornamenti farli sempre con il PUT
films.put('/voto/:id([0-9a-f]{24})', filmController.updateVote)

//la rotta seguente l'abbiamo creata nel file film_controller.js

// films.get('/:id', (req, res) => {
//     res.send('film con id:' + req.params.id);
// })



films.post('/', (req,res) =>  {
    var film = req.body.titolo;                //body è tutto l'oggetto, se voglio una delle proprietà scrivo req.body.title
    console.log(film);
    res.send(film);
})

module.exports = films;