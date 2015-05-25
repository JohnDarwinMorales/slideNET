var user_module=require('../models/client_model');


var clients=[];

var i=0;

function Handler(){
    
 var sendMsg=function(socket,action,data){
   data.identity=socket.id;
   var msg=JSON.stringify(data);
   socket.write(action+"="+msg);
 }
 
 var actionJoin=function(socket,json){
   var client=new user_module.user();
   client.setStringToObject(json);
   client.setId(socket.id);
   clients[socket.id]=client;
   console.log("new client->"+client.toString());
   sendMsg(socket,"ok",{});
 }
 
 var actionHello=function (socket,json){
    i++
    var client=clients[socket.id];
    socket.write("hello "+client.name+" msg:"+ i); 
 }
 
 this.actions={
  'join':actionJoin,
  'hello':actionHello
  //'end':actionEnd()
 };
 
}


function response(socket,data){
   var h= new Handler();
   
   var msg=data.split('=');
   var action=msg[0];
   var string=msg[1];
   console.log("type action:"+action);
   h.actions[action](socket,string);
}



exports.response=response;