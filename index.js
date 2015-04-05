var server = require("./config/server.js");
var router = require("./config/router");
var requestHandlers = require("./config/requestHandler");

var handle = {};
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;
handle["error404"] = requestHandlers.error404;

server.iniciar(router.route, handle);