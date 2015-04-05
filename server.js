var http = require("http");
var url = require("url");

function iniciar(route,handle) {
    
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        //console.log("Peticion para " + pathname + " recibida.");

        route(handle,pathname);
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("Hola Hermosa te quiero muchisimo :)");
        
        
        response.end();
    }

    http.createServer(onRequest).listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
         //this.address();
        //console.log("server is running at"+ this.address() + ":" + this.port);
 });
}

exports.iniciar = iniciar;