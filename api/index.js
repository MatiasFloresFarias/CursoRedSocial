// conectar a la base de datos 
'use strict'

var mongoose =  require ('mongoose'); 
var app =require('./app')
var port = 3800; 
//Conexion DataBase
mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://192.168.0.26:27017/curso-mean-social', {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log("La conexion a la base de datos se ha realizado correctamente")

            //Crear Servidor 
            app.listen(port, () => {
                console.log("Servidor corriendo  en http//localhost:3800");
            })

        })
        .catch(err => console.log(err));
