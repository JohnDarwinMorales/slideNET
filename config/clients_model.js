/**
 * Created by jdmorales on 8/04/15.
 */

//https://developer.mozilla.org/es/docs/Web/JavaScript/Introducci%C3%B3n_a_JavaScript_orientado_a_objetos



function client(name,id,roomsClient){
    this.name=name;
    this.id=id;
    this.roomsClient=roomsClient;
}

function room(roomName,creator){
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


roomClient.prototype.getRoomsClients=function(){
    return roomsClients;
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


exports.client=client;
exports.room=room;
exports.roomClient=roomClient;



