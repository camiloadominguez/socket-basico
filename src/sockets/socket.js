const {io} = require('../index');

io.on('connection',(client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        user:'admin',
        messaje:'Bienvenido a esa aplicación'
    });

    client.on('disconnect', ()=>{
        console.log('Usuario desconectado');
    });

    //Excuchar el cliente
    client.on('enviarMensaje',(data, callback)=>{
        console.log(data);

        client.broadcast.emit('enviarMensaje', data)
        // if(message.usuario){
        //     callback({
        //         message:'Todo salio bien'
        //     });
        // }else{
        //     callback({
        //         message:'No viene el nombre del usuario'
        //     })
        // }
    });
});