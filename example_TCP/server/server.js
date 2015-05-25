var net = require('net');
var handler=require("./handler");

var i=0;
var server = net.createServer();


var connection=function(socket) { //'connection' listener
  socket.id="ABC"+ Math.floor(Math.random() * 1000);
  console.log('client connected');
  
  socket.on('data', function (data) {
     //console.log(data.toString()); 
     handler.response(socket,data.toString());
  }) 
      
  socket.on('end', function() {
    console.log('client disconnected');
  });
}


server.on('connection',connection);


server.listen(8124, function() { //'listening' listener
  console.log('server bound');
});



