var socket = io();
            // las funciones on escuchan eventos
            socket.on('connect', function (){
                console.log('conectado al servidor');
            });
            socket.on('disconnect', function(){
                console.log('Se perdio la conexion con el servidor');
            })

            //emitir un mensaje desde el frontend para que el servidor lo escuche
            // las funciones emmit envian informacion
            socket.emit('enviarMensaje', {
                usuario: 'Camilo Dominguez',
                mensaje: 'Hola CADS'
            }, (resp)=>{
                console.log('respuesta del servidor', resp);
            });
            //escuchar información

            socket.on('enviarMensaje',(resp)=>{
                console.log('información del servidor',resp);
            })