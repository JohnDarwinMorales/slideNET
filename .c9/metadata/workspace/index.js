{"filter":false,"title":"index.js","tooltip":"/index.js","undoManager":{"mark":65,"position":65,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":17,"column":8},"action":"remove","lines":["var http = require(\"http\");","","","","function onRequest(request, response) {","  response.writeHead(200, {\"Content-Type\": \"text/html\"});","  response.write(\"Hola Mundo\");","","  response.end();","}","",";","//console.log(\"server is rurning in port: 5555\");","","http.createServer(onRequest).listen(process.env.PORT || 3000, process.env.IP || \"0.0.0.0\", function(){"," //var addr= server.address();"," //console.log(\"server is running at\"+ addr.address+ \":\" + addr.port);"," });    "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":9,"column":37},"action":"insert","lines":["var server = require(\"./server\");","var router = require(\"./router\");","var requestHandlers = require(\"./requestHandler\");","","var handle = {}","handle[\"/\"] = requestHandlers.iniciar;","handle[\"/iniciar\"] = requestHandlers.iniciar;","handle[\"/subir\"] = requestHandlers.subir;","","server.iniciar(router.route, handle);"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["<<<<<<< HEAD",""]},{"start":{"row":10,"column":37},"end":{"row":38,"column":0},"action":"insert","lines":["","=======","var server = require(\"./config/server.js\");","var router = require(\"./config/router\");","var requestHandlers = require(\"./config/requestHandler\");","","var handle = {};","handle[\"/\"] = requestHandlers.iniciar;","handle[\"/iniciar\"] = requestHandlers.iniciar;","handle[\"/subir\"] = requestHandlers.subir;","handle[\"error404\"] = requestHandlers.error404;","","server.iniciar(router.route, handle);","","","","","","","","/*"," server.listen(process.env.PORT || 3000, process.env.IP || \"0.0.0.0\", function(){"," var addr= server.address();"," console.log(\"server is running at\"+ addr.address+ \":\" + addr.port);"," });"," */","//console.log(\"server is rurning in port: 5555\");",">>>>>>> 47c9303ead80d0969321ce6f263be8a15e80a1fa",""]}]}],[{"group":"doc","deltas":[{"start":{"row":37,"column":0},"end":{"row":37,"column":48},"action":"remove","lines":[">>>>>>> 47c9303ead80d0969321ce6f263be8a15e80a1fa"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":23,"column":0},"action":"remove","lines":["<<<<<<< HEAD","var server = require(\"./server\");","var router = require(\"./router\");","var requestHandlers = require(\"./requestHandler\");","","var handle = {}","handle[\"/\"] = requestHandlers.iniciar;","handle[\"/iniciar\"] = requestHandlers.iniciar;","handle[\"/subir\"] = requestHandlers.subir;","","server.iniciar(router.route, handle);","=======","var server = require(\"./config/server.js\");","var router = require(\"./config/router\");","var requestHandlers = require(\"./config/requestHandler\");","","var handle = {};","handle[\"/\"] = requestHandlers.iniciar;","handle[\"/iniciar\"] = requestHandlers.iniciar;","handle[\"/subir\"] = requestHandlers.subir;","handle[\"error404\"] = requestHandlers.error404;","","server.iniciar(router.route, handle);",""]},{"start":{"row":0,"column":0},"end":{"row":10,"column":37},"action":"insert","lines":["var server = require(\"./config/server.js\");","var router = require(\"./config/router\");","var requestHandlers = require(\"./config/requestHandler\");","","var handle = {};","handle[\"/\"] = requestHandlers.iniciar;","handle[\"/iniciar\"] = requestHandlers.iniciar;","handle[\"/subir\"] = requestHandlers.subir;","handle[\"error404\"] = requestHandlers.error404;","","server.iniciar(router.route, handle);"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":37},"end":{"row":11,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":37},"end":{"row":11,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":37},"end":{"row":11,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":37},"end":{"row":11,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":37},"end":{"row":11,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":0},"end":{"row":18,"column":49},"action":"remove","lines":["","/*"," server.listen(process.env.PORT || 3000, process.env.IP || \"0.0.0.0\", function(){"," var addr= server.address();"," console.log(\"server is running at\"+ addr.address+ \":\" + addr.port);"," });"," */","//console.log(\"server is rurning in port: 5555\");"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":37},"end":{"row":11,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":37},"end":{"row":11,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":0},"end":{"row":11,"column":0},"action":"insert","lines":["<<<<<<< HEAD",""]},{"start":{"row":11,"column":37},"end":{"row":15,"column":0},"action":"insert","lines":["","=======","server.iniciar(router.route, handle);",">>>>>>> cf7379887fbbab03b2044d3c62a4ee2aa32ecf2c",""]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":0},"end":{"row":12,"column":7},"action":"remove","lines":["<<<<<<< HEAD","server.iniciar(router.route, handle);","======="]},{"start":{"row":10,"column":0},"end":{"row":10,"column":1},"action":"insert","lines":["4"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":0},"end":{"row":12,"column":48},"action":"remove","lines":[">>>>>>> cf7379887fbbab03b2044d3c62a4ee2aa32ecf2c"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":0},"end":{"row":10,"column":1},"action":"remove","lines":["","4"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"insert","lines":["handle[\"/js/socket_connect.js\"] = requestHandlers.socket_connect;",""]},{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":9},"end":{"row":8,"column":14},"action":"remove","lines":["subir"]},{"start":{"row":8,"column":9},"end":{"row":8,"column":28},"action":"insert","lines":["js/mobilesDetect.js"]},{"start":{"row":8,"column":49},"end":{"row":8,"column":54},"action":"remove","lines":["subir"]},{"start":{"row":8,"column":49},"end":{"row":8,"column":62},"action":"insert","lines":["mobilesDetect"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":63},"end":{"row":9,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":0},"end":{"row":9,"column":63},"action":"insert","lines":["handle[\"/js/mobilesDetect.js\"] = requestHandlers.mobilesDetect;"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":8},"end":{"row":9,"column":28},"action":"remove","lines":["/js/mobilesDetect.js"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":8},"end":{"row":9,"column":45},"action":"insert","lines":["/css/stylesheet/mean_style_client.css"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":66},"end":{"row":9,"column":79},"action":"remove","lines":["mobilesDetect"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":66},"end":{"row":9,"column":67},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":67},"end":{"row":9,"column":68},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":68},"end":{"row":9,"column":69},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":69},"end":{"row":9,"column":70},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":66},"end":{"row":9,"column":70},"action":"remove","lines":["styl"]},{"start":{"row":9,"column":66},"end":{"row":9,"column":76},"action":"insert","lines":["stylesheet"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":76},"end":{"row":9,"column":77},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":24},"end":{"row":9,"column":45},"action":"remove","lines":["mean_style_client.css"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":8},"end":{"row":9,"column":24},"action":"remove","lines":["/css/stylesheet/"]},{"start":{"row":9,"column":8},"end":{"row":9,"column":45},"action":"insert","lines":["/css/stylesheet/mean_style_client.css"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":8},"end":{"row":9,"column":45},"action":"remove","lines":["/css/stylesheet/mean_style_client.css"]},{"start":{"row":9,"column":8},"end":{"row":9,"column":45},"action":"insert","lines":["/css/stylesheet/mean_style_client.css"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":78},"end":{"row":10,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":0},"end":{"row":10,"column":78},"action":"insert","lines":["handle[\"/css/stylesheet/mean_style_client.css\"] = requestHandlers.stylesheets;"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":0},"end":{"row":10,"column":78},"action":"remove","lines":["handle[\"/css/stylesheet/mean_style_client.css\"] = requestHandlers.stylesheets;"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":63},"end":{"row":9,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":0},"end":{"row":9,"column":78},"action":"insert","lines":["handle[\"/css/stylesheet/mean_style_client.css\"] = requestHandlers.stylesheets;"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":78},"end":{"row":11,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":9},"end":{"row":9,"column":10},"action":"remove","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":9},"end":{"row":9,"column":10},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":12},"end":{"row":9,"column":13},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":8},"end":{"row":9,"column":13},"action":"remove","lines":["/angu"]},{"start":{"row":9,"column":8},"end":{"row":9,"column":15},"action":"insert","lines":["angular"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":8},"end":{"row":9,"column":49},"action":"remove","lines":["/angular/stylesheet/mean_style_client.css"]},{"start":{"row":9,"column":8},"end":{"row":9,"column":43},"action":"insert","lines":["/angular-touch/angular-touch.min.js"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":64},"end":{"row":9,"column":75},"action":"remove","lines":["stylesheets"]},{"start":{"row":9,"column":64},"end":{"row":9,"column":65},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":65},"end":{"row":9,"column":66},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":66},"end":{"row":9,"column":67},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":67},"end":{"row":9,"column":68},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":68},"end":{"row":9,"column":69},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":69},"end":{"row":9,"column":70},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":70},"end":{"row":9,"column":71},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":71},"end":{"row":9,"column":72},"action":"insert","lines":["T"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":72},"end":{"row":9,"column":73},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":73},"end":{"row":9,"column":74},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":74},"end":{"row":9,"column":75},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":75},"end":{"row":9,"column":76},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":39},"end":{"row":9,"column":40},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":38},"end":{"row":9,"column":39},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":37},"end":{"row":9,"column":38},"action":"remove","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":36},"end":{"row":9,"column":37},"action":"remove","lines":["."]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":12,"column":0},"end":{"row":12,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":32,"mode":"ace/mode/javascript"}},"timestamp":1428468448000,"hash":"da3f2d2f4ab4c3b4621a9269e8f9da44b9409b35"}