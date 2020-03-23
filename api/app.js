//
'use strict'

var express =require('express'); 
var bodyParser = require('body-parser'); 

var app = express(); 

//Cargar rutas  
var user_routes = require('./routes/user');

//Middlewares
//Convertir lo que llega a Body a JSON 
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json()); 

//Cors 

//Rutas 
app.use('/api', user_routes)

//Exportar 
module.exports = app; 