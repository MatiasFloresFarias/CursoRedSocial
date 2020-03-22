'use strict' 

var mongoose = require ('mongoose'); 
var Schema = mongoose.Schema; 

// modelo de la seguidores, esquema de la base de datos   
var MessageSchema = Schema({    
    text:String,
    created_at: String, 
    emitter: {type: Schema.ObjectId, ref: 'User'},
    receiver: {type: Schema.ObjectId, ref: 'User'}
    
}); 

module.exports = mongoose.model('Message', MessageSchema); 