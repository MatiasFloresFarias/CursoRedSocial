'use strict'
//carga el modulo de mongoose 
var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

// modelo de la seguidores, esquema de la base de datos   
var FollowSchema = Schema({    
    user : {type: Schema.ObjectId, ref: 'User'},
    followed : {type :Schema.ObjectId, ref: 'User'}

    
}); 

module.exports = mongoose.model('Follow', FollowSchema); 