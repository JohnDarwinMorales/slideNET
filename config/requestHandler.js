
var requestHandlers;
var fs = require("fs");
var path = require("path");

function getData(response,module,filename){
    var pathRelative = path.join(process.cwd(), '/'+module+'/templates/'+filename); // current working directory

    fs.readFile(pathRelative, function(error, data){
        if(!error){
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(data, "utf8");
            response.end();
        }
    });
}

function iniciar(response){
   getData(response,'client','index.html');
};

function subir(response){
    console.log("subir");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write('subir', "utf8");
    response.end();
};

function error404(response,pathname){
    console.log(" error 404 no found path"+ pathname);
    getData(response,'client','error_404.html');
};




exports.iniciar = iniciar;
exports.subir = subir;
exports.error404 = error404;