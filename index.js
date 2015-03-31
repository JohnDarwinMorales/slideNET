var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Mundo");

  response.end();
}

http.createServer(onRequest).listen(5555);
console.log("server is rurning in port: 5555");