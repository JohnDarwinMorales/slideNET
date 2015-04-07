var server = require("./config/server.js");
var router = require("./config/router");
var requestHandlers = require("./config/requestHandler");

var handle = {};
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/js/socket_connect.js"] = requestHandlers.socket_connect;
handle["/js/mobilesDetect.js"] = requestHandlers.mobilesDetect;
handle["/css/stylesheet/mean_style_client.css"] = requestHandlers.stylesheets;
handle["error404"] = requestHandlers.error404;


server.iniciar(router.route, handle);

