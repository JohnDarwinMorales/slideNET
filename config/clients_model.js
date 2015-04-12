/**
 * Created by jdmorales on 8/04/15.
 */

//https://developer.mozilla.org/es/docs/Web/JavaScript/Introducci%C3%B3n_a_JavaScript_orientado_a_objetos



function client(name,id,roomClient){
    this.name=name;
    this.id=id;
    this.roomClient=roomClient;
}

function room(roomName,id,socket,creator){
    this.idRoom=id;
    this.socket=socket;
    this.roomName=roomName;
    this.clients=[];
    this.creator=creator;
}


function roomClient(){
    this.roomsClients=[];
}

roomClient.prototype.newRoom= function (room) {
    this.roomsClients.push(room);
};


roomClient.prototype.deleteRoom= function (room) {
    var indexRoom=this.getRoomById(room.roomName);
    this.roomsClients.splice(indexRoom[0].indexRoom,1)
};

roomClient.prototype.deleteClient= function (indexRoom,indexClient) {
    var room=this.roomsClients[indexRoom];
    
    if(room.clients.length>0){
        var clients=room.clients;
        clients.splice(indexClient,1);
    }

};



roomClient.prototype.getRoomsClients=function(){
    return this.roomsClients;
};

roomClient.prototype.existRoom = function(nameRoom){

    if(this.roomsClients.length !=0 ){
        var i=0;
        while(i < this.roomsClients.length){
            if(this.roomsClients[i].roomName === nameRoom){
                return true;
            }
            i++;
        }
    }
    return false;
};

roomClient.prototype.getRoom = function(nameRoom){

    if(this.roomsClients.length !=0 ){
        var i=0;
        while(i < this.roomsClients.length){
            if(this.roomsClients[i].roomName === nameRoom){
                return this.roomsClients[i];
            }
            i++;
        }
    }
};

roomClient.prototype.getRoomById = function(idRoom){

    if(this.roomsClients.length !=0 ){
        var i=0;
        while(i < this.roomsClients.length){
            if(this.roomsClients[i].idRoom === idRoom){
                return [{indexRoom:i, roomsClients: this.roomsClients[i]}];
            }
            i++;
        }
    }

};



roomClient.prototype.getClientRoom = function(idClient){

    if(this.roomsClients.length !=0 ){
        var i=0;
        while(i < this.roomsClients.length){
             var room_i=this.roomsClients[i];
              for(var j=0; j<room_i.clients.length; j++ ){
                  var client_j=room_i.clients[j];
                  
                  if(client_j.id==idClient){
                     return {client:client_j,indexRoom: i , indexClient: j};
                  }
              }
         i++;
        }
    }
    return -1;
};




exports.client=client;
exports.room=room;
exports.roomClient=roomClient;



