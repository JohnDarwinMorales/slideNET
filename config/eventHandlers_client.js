var disconnect_client=function(data){

};

var connect_client=function(data){

};

var connect_client=function(data){

};


function onSocketConnection(socket){
    socket.on('connect',connect_client);
    socket.on('disconnect',disconnect_client);

    socket.emit('date',{'date': new Date()});
}


exports.onSocketConnection=onSocketConnection;