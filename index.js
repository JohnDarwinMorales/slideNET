var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandler");

var handle = {}
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;

server.iniciar(router.route, handle);







/*
 server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
 var addr= server.address();
 console.log("server is running at"+ addr.address+ ":" + addr.port);
 });
 */
//console.log("server is rurning in port: 5555");