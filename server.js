var http = require("http");
var url = require("url");

function iniciar(route,handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Peticion para " + pathname + " recibida.");

        route(handle,pathname);


        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("Hola Mundo");
        response.end();
    }

    http.createServer(onRequest).listen(5555,function(){
        console.log("server is rurning in port: 5555");
    });
}

exports.iniciar = iniciar;