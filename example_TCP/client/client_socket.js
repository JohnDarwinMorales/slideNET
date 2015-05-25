var net = require('net');
var readline = require('readline');
var i=0;


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


var  connect=function() { 
  console.log('connected to server!');
   rl.question("What is your name? ", function(answer) {
      client.write(answer);
      rl.close();
  });
}

var client = new net.Socket();
client.connect(8124,"0.0.0.0",connect);


client.on('data', function(data) {
  console.log(data.toString());
  i++;
  
  setTimeout(function(){
     client.write('hello='+i);
  },1000);

});


client.on('end', function() {
  console.log('disconnected from server');
});



