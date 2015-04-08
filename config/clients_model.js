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
    this.roomsClients=['ASAsA'];
}

roomClient.prototype.existRoom = function(nameRoom){
    console.log(this.roomsClients);
    //return false;
    /*
     if(roomsClients.length !=0 ){
     roomsClients.forEach(function(element,index, array){
     if(element.roomName==nameRoom){
     return true;
     }
     });
     }else{
     return false;
     }
     */
    /*
    this.newRoom= function (room) {
        roomsClients.push(room);
        console.log(room);
    };

    //this.existRoom=

    this.getRoomsClients=function(){
        return roomsClients;
    };
    */
};


exports.client=client;
exports.room=room;
exports.roomClient=roomClient;



