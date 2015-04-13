
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

function view_login(response){
  getData(response,'client/templates','log_in.html', "text/html");
}

function view_slide(response){
  getData(response,'client/templates','slide.html', "text/html");
}

function socket_connect(response){
    getData(response,'client/js','socket_connect.js', "application/javascript");
}

function mobilesDetect(response){
    getData(response,'client/js','mobilesDetect.js', "application/javascript");
}

function formSlide(response){
    getData(response,'client/js/form-slide','form-slide.js', "application/javascript");
}

function angularTouch(response){
    getData(response,'node_modules/angular-touch','angular-touch.js', "application/javascript");
}

function angularRoute(response){
    getData(response,'node_modules/angular-route','angular-route.js', "application/javascript");
}


function stylesheets(response){
  getData(response,'client/css/stylesheets','mean_style_client.css', "text/css");
}





function error404(response,pathname){
    console.log(" error 404 no found path"+ pathname);
    getData(response,'client','error_404.html');
}




exports.iniciar = iniciar;
exports.socket_connect=socket_connect;
exports.mobilesDetect=mobilesDetect;
exports.formSlide=formSlide;
exports.angularTouch=angularTouch;
exports.stylesheets=stylesheets;
exports.angularRoute=angularRoute;
exports.view_login=view_login;
exports.view_slide=view_slide;
exports.error404 = error404;