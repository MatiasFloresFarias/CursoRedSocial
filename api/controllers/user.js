// Para utilizar la ultimas caracteristicas de JS  
'use strict'

var bcrypt = require('bcrypt-nodejs');

var User = require('../models/user');

function home(req, res) {

    res.status(200).send({
        message: 'Hola Mundo desde el servidor NodeJs'
    });

}
function pruebas(req, res) {
    console.log(req.body);
    res.status(200).send({
        message: 'Accion de prueba en el servidor de NodeJS'
    });

}

function saveUser(req, res) {
    var params = req.body;
    var user = new User();

    if (params.name && params.surname && params.nick && params.email && params.password) {
        user.name = params.name;
        user.surname = params.surname;
        user.nick = params.nick;
        user.email = params.email;
        user.role = 'ROLE_USER';
        user.image = null;

        //verificar que no se repitan los datos duplicados 
        User.find({
            $or: [
                { email: user.email.toLowerCase() },
                { nick: user.nick.toLowerCase() }
            ]
        }).exec((err, users) => {
            if (err) return res.status(500).send({ message: 'Error en la peticion del usuario' })

            if (users && users.length >= 1) {
                return res.status(200).send({ message: 'El usuario que intenta registar ya existe' })
            } else {
                //encriptar contraseña y guardo  los datos 
                bcrypt.hash(params.password, null, null, (err, hash) => {
                    user.password = hash;
                    user.save((err, userStored) => {
                        if (err) {
                            return res.status(500).send({ message: 'Error al guardar el usuario' });
                        }

                        if (userStored) {
                            res.status(200).send({ user: userStored });
                        } else {
                            res.status(404).send({ message: 'No se ha registrado el usuario' });
                        }
                    });
                });
            }
        });


    } else {
        res.status(200).send({ message: 'Enviar todos los campos' });
    }
}

function loginUser(req, res){
    var params = req.body; 
    
    var email = params.email; 
    var password = params.password; 

    User.findOne({email: email}, (err, user) => {
        if (err) return res.status(500).send({message: 'Error en la peticion'}); 

        if(user){
            bcrypt.compare(password, user.password, (err, check) => {
                if(check){
                    //devolver datos del usuarior  
                    return res.status(200).send({user})
                }else{
                    return res.status(404).send({message: 'El usuario no se ha podido identificar'});
                }
            });
        }else{
            return res.status(404).send({message: 'El usuario no se ha podido identificar!!'});
        }
    });
}


module.exports = {
    home,
    pruebas,
    saveUser,
    loginUser
}