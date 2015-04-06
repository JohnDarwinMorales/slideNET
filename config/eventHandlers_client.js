////////////////////////////MODEL///////////////////////////////

////////////////////////////MODEL///////////////////////////////


var disconnect_client=function(data){

};

var connect_client=function(data){

};

var connect_client=function(data){

};


function onSocketConnection(socket){
    //socket.on('connect',connect_client);
    socket.on('disconnect',disconnect_client);

    setInterval(function(){
        // socket.emit('init',{hello:new Date().getSeconds()});
    },1000);


    socket.on('connected', function(msg,id){
         //console.log(msg);
         //console.log(id);
        socket.emit('init',msg);
        //socket.broadcast.to(id).emit('init',msg)
        //socket.emit('init',{hello: new Date().getSeconds()});


        //socket.broadcast.to(id).emit('init', {hello: new Date().getSeconds()});
        //});
    });

}


exports.onSocketConnection=onSocketConnection;