
var requestHandlers;
var fs = require("fs");
var path = require("path");

function getData(response,module,filename,Content_Type){
    var pathRelative = path.join(process.cwd(), '/'+module+'/'+filename); // current working directory

    fs.readFile(pathRelative, function(error, data){
        if(!error){
            response.writeHead(200, {"Content-Type": Content_Type});
            response.write(data, "utf8");
            response.end();
        }
    });
}

function iniciar(response){
    getData(response,'client/templates','index.html', "text/html");
}

function socket_connect(response){
    getData(response,'client/js','socket_connect.js', "application/javascript");
}

function mobilesDetect(response){
    getData(response,'client/js','mobilesDetect.js', "application/javascript");
}

function error404(response,pathname){
    console.log(" error 404 no found path"+ pathname);
    getData(response,'client','error_404.html');
}




exports.iniciar = iniciar;
exports.socket_connect=socket_connect;
exports.mobilesDetect=mobilesDetect;
exports.error404 = error404;