var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");
var io = require('socket.io')();
var eventHandlers_client= require('./eventHandlers_client');


function iniciar(route,handle) {
    process.env.PORT=process.argv[2] || 5555;
    process.env.IP= 'localhost';

    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("-GET [" + pathname + "]");

        route(handle,pathname,response);
    }

    var server=http.createServer(onRequest);

    server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0",function(){
        var addr= server.address();
        console.log("Server listening at", addr.address +":"+ addr.port);
    });

    /////////////////////////////////SOCKET.IO//////////////////////////////////////

    var onSocketConnection=eventHandlers_client.onSocketConnection;
    io.on('connection',onSocketConnection);
    io.listen(server);

    ///////////////////////////////////////////////////////////////////////////////
}

exports.iniciar = iniciar;