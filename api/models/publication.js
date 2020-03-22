'use strict'
//carga el modulo de mongoose 
var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

// modelo de la publicacion, esquema de la base de datos   
var PublicationSchema = Schema({
     
    text : String, 
    file : String, 
    created_at : String, 
    user : {type: Schema.ObjectId, ref: 'User'}

    
}); 

module.exports = mongoose.model('Publication', PublicationSchema); 