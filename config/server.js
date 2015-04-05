var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");

    function iniciar(route,handle) {

        function onRequest(request, response) {
            var pathname = url.parse(request.url).pathname;
            console.log("-GET [" + pathname + "]");
            route(handle,pathname,response);
        }

        http.createServer(onRequest).listen(5555,function(){
            console.log("server is rurning in port: 5555");
        });
    }

exports.iniciar = iniciar;