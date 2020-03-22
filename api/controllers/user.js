// Para utilizar la ultimas caracteristicas de JS  
'use strict'

var User = require('../models/user');  

function home(req, res){

    res.status(200).send({
        message: 'Hola Mundo desde el servidor NodeJs'
    });

}
function pruebas(req, res){
    console.log(req.body); 
    res.status(200).send({
        message: 'Accion de prueba en el servidor de NodeJS'
    });

}

module.exports = {
    home, 
    pruebas
}