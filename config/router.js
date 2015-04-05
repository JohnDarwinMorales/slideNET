

function route(handle,pathname,response) {
    //console.log("A punto de rutear una peticion para " + pathname);

    if (typeof handle[pathname] === 'function') {
        return handle[pathname](response);
    } else {
        return handle['error404'](response,pathname);
    }
}

exports.route = route;