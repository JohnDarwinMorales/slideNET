var server = require("./config/server.js");
var router = require("./config/router");
var requestHandlers = require("./config/requestHandler");

var handle = {};
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/js/socket_connect.js"] = requestHandlers.socket_connect;
handle["/js/mobile-detect.min.js"] = requestHandlers.mobilesDetect;
handle["/js/form-slide/form-slide.js"] = requestHandlers.formSlide;
handle["/angular-touch/angular-touch.js"] = requestHandlers.angularTouch;
handle["/angular-route/angular-route.js"] = requestHandlers.angularRoute;
handle["/css/stylesheet/mean_style_client.css"] = requestHandlers.stylesheets;
handle["/static/core_nodeJS.png"] = requestHandlers.coreNode_img;


//////////////----------ngViews---------- //////////////
handle["/templates/log_in.html"] = requestHandlers.view_login;
handle["/templates/slide.html"] = requestHandlers.view_slide;
//////////////--------------------------- //////////////


handle["error404"] = requestHandlers.error404;

server.iniciar(router.route, handle);

