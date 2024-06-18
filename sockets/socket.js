const {io}=require('../index');


//Mensajes de Sockets
//client es unam computadora que se conecta o dispositivo  que se conecta al socket server
io.on('connection', client => {
    client.on('disconnect', () => { 
        
        console.log('Cliente Desconectado');
    });
//para la escucha deel mensaje en eel emit en index , aqui es on en index
    client.on('mensaje',(payload)=>{
        console.log('Mensaje!!',payload) ;

        io.emit('mensaje',{admin:'Nuevo Mensaje'});
    });
  });