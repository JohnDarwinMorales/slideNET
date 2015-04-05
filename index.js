var server = require("./config/server.js");
var router = require("./config/router");
var requestHandlers = require("./config/requestHandler");

var handle = {};
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;
handle["error404"] = requestHandlers.error404;

server.iniciar(router.route, handle);







/*
 server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
 var addr= server.address();
 console.log("server is running at"+ addr.address+ ":" + addr.port);
 });
 */
//console.log("server is rurning in port: 5555");