var socket = io.connect();

socket.on('date', function(data){
    console.log(data.date);
});

socket.emit('client_data', {'firtsMessage': 'asdasdas'});