var client= require('./clients_model');
 var roomClient= new client.roomClient();


var disconnect_client=function(data){

};



var connect_client=function(msg,id){
    console.log(msg);

    if(msg.typeDevice == 'mobile'){
        msg.correct=true;
    }


    //console.log(msg);
    //console.log(id);
    //socket.emit('init',msg);
    //console.log(msg.isMobile);
    //socket.emit('init',msg);
    //socket.emit('init',{hello: new Date().getSeconds()});
    /*
     socket.on('init',function(msg){
     socket.emit()
     })
     */


    //socket.broadcast.to(id).emit('init', {hello: new Date().getSeconds()});
    //});

};





function onSocketConnection(socket){



    socket.on('connected', function(msg,id){
        msg.correct =true;

        if(msg.typedevice == 'mobile'){
            msg.send_message = "Waiting for connection of some Desktop.";
            msg.correct =true;

            if(!roomClient.existRoom(msg.codeMobile)){
                var room = new client.room(msg.codeMobile,msg.nickname);
                roomClient.newRoom(room);
                console.log(room);
            }else{
                msg.correct =false;
                msg.send_message = " change code.";
            }
        }else {
            if (roomClient.existRoom(msg.codeMobile)) {
                var room = roomClient.getRoom(msg.codeMobile);
                var user= new client.client(msg.nickname,socket.id,msg.codeMobile);
                room.clients.push(user);
                msg.send_message = "";
            } else {
                msg.correct =false;
                msg.send_message = " No exist this code.";
            }
        }

        socket.emit('init',msg);

    });


}


exports.onSocketConnection=onSocketConnection;