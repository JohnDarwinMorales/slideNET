var net = require('net');
var readlineSync = require('readline-sync');
var user_module=require('../models/client_model');

var i=0;

function sendMsg(action,data){
  client.write(action+"="+data);
}

var  connection=function(){ 
  console.log('connected to server!');
  var  person=new user_module.user();
  var answer=readlineSync.question("What is your name and age? ");
  person.setInformation(answer);
  sendMsg("join",person.toStringInfo());
}

var client = net.connect({port: 8124},connection);//'connect' listener


client.on('data', function(data) {
  console.log(data.toString());
  i++;
  setTimeout(function(){
     client.write('hello=' +i);
  },500);

});

client.on('end', function() {
  console.log('disconnected from server');
});

client.on('error',function(){
  console.log("server disconnected");
})
