var client= require('./clients_model');
 var roomClient= new client.roomClient();

function connectGuestUser(socket, msg){
    if (roomClient.existRoom(msg.codeMobile)) {
                msg.correct =true;
                var room = roomClient.getRoom(msg.codeMobile);
                var user= new client.client(msg.nickname,socket.id,msg.codeMobile);
                
                room.clients.push(user);
                msg.send_message = "";
                socket.join(msg.codeMobile);
                msg.clients=roomClient.getRoom(msg.codeMobile).clients;
                msg.send_message="";
                msg.startToSlide=false;
                msg.creator=room.creator;
                socket.broadcast.to(msg.codeMobile).emit('newClient',msg);
                
               
       } else {
                msg.correct =false;
                msg.send_message = " No exist this mobile code.";
       }
        
        
     if(room.state.startToSlide){
        // message.startToSlide=true;
         //msg.currentIndex=room.state.currentIndex;
         socket.emit('init_slideToStart',room.state); 
      }
      
      return msg;
        
}

function connectExponentUser(socket, msg){
        msg.correct =true;
        
        if(!roomClient.existRoom(msg.codeMobile)){
        
                socket.join(msg.codeMobile);
                var room = new client.room(msg.codeMobile,socket.id,socket,msg.nickname);
                roomClient.newRoom(room);

        }else{
                msg.correct =false;
                msg.send_message = " change code.";
        }
        return msg;
}




var disconnect_client=function(msg){
   //console.log(msg);
  // console.log(this.id);
  var client_disconnect=roomClient.getRoomById(this.id);
  
  if(client_disconnect !== undefined){
      //console.log(client_disconnect);
      //console.log('close session in '+ client_disconnect[0].roomsClients.roomName );
  }else{
     client_disconnect=roomClient.getClientRoom(this.id);
     var indexRoom=client_disconnect.indexRoom;
     var client_Exponent=roomClient.roomsClients[indexRoom];
     var roomName=client_Exponent.roomName;
     var socketExp=client_Exponent.socket; //socket Exponent 
     
     roomClient.deleteClient(client_disconnect.indexRoom,client_disconnect.indexClient);
     this.leave(client_disconnect.roomClient);
     
     socketExp.emit('disconnect_client',client_disconnect);
     socketExp.broadcast.to(roomName).emit('disconnect_user', client_disconnect);
    }
  
     
};

var init_startToSlide=function(msg){
   var room = roomClient.getRoom(msg.codeMobile);
   var stateRoom=room.state;
   stateRoom.startToSlide=true;
   if(msg.typedevice=='mobile'){
        this.broadcast.to(msg.codeMobile).emit('init_slideToStart',stateRoom);
   }else{
         
   }
}


var connect_client=function(msg){
     //console.log(msg);
     this.on('disconnect',disconnect_client);
     
     
      if(msg.typedevice == 'mobile'){
            msg=connectExponentUser(this,msg);
      } else {
           msg=connectGuestUser(this, msg);
      }
      
      this.emit('init',msg); 
    
};



function onSocketConnection(socket){
  socket.on('connected',connect_client);
  socket.on('initslide',init_startToSlide);
}


exports.onSocketConnection=onSocketConnection;