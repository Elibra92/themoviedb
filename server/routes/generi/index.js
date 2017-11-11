var express = require('express');
var genereController = require('./generi_controller.js')



var generi = express.Router();
generi.get('/', genereController.generi_getAll);
generi.delete('/:id', genereController.deleteOne);
generi.post('/', genereController.insertOne);
generi.put('/:id', genereController.updateGenere);


module.exports = generi;