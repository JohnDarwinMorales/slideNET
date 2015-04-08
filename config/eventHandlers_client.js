////////////////////////////MODEL///////////////////////////////

////////////////////////////MODEL///////////////////////////////


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
        console.log(msg);
        
        if(msg.typedevice == 'mobile'){
           msg.correct =true;
           msg.send_message = "Waiting for connection of some Desktop.";
        }
        
        
         //console.log(msg);
         //console.log(id);
        //socket.emit('init',msg);
        //console.log(msg.isMobile);
        socket.emit('init',msg);
        //socket.emit('init',{hello: new Date().getSeconds()});
        /*
        socket.on('init',function(msg){
            socket.emit()
        })
        */


        //socket.broadcast.to(id).emit('init', {hello: new Date().getSeconds()});
        //});
    
});
    
  // socket.on('disconnect',);

    setInterval(function(){
        // socket.emit('init',{hello:new Date().getSeconds()});
    },1000);

}


exports.onSocketConnection=onSocketConnection;