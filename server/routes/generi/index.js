var express = require('express');
var genereController = require('./generi_controller.js')

var generi = express.Router();

generi.get('/', genereController.generi_getAll);



module.exports = generi;