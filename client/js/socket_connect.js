
angular.module('slideRemoteApp',[])

    .factory('socket', function ($rootScope) {
        var socket = io.connect();
        return {

            on: function (eventName, callback) {
                socket.on(eventName, function () {
                    var args = arguments;
                    console.log(args);
                    $rootScope.$apply(function () {
                        callback.apply(socket, args);
                    });
                });
            },

            emit: function (eventName, data, callback) {
                socket.emit(eventName, data, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        if (callback) {
                            callback.apply(socket, args);
                        }
                    });
                })
            }

        };
    })


    .controller('appCtrlSocket',function($scope,socket){

        socket.on('init', function (data) {
            $scope.name = data.name;
            $scope.users = data.users;
        });

    });

/*

 var socket = io.connect();


 socket.on('date', function(data){
 console.log(data.date);
 });

 socket.emit('client_data', {'firtsMessage': 'asdasdas'});
 */
