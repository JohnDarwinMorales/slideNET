
angular.module('slideRemoteApp',[])

    .factory('mobile',function(){
        var md = new MobileDetect(window.navigator.userAgent);

        function isMobile(){
            if(md.phone()!== null ||  md.tablet() !== null){
                return true;
            }else{
                return false;
            }
        }


        return {
            isMobile:isMobile
        }
    })

    .factory('socket', function ($rootScope) {
        var socket = io.connect();
        return {

            on: function (eventName, callback) {
                socket.on(eventName, function () {
                    var args = arguments;
                    //console.log(socket);

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


    .controller('appCtrlSocket',function($scope,mobile,socket){

        socket.on('init', function (data) {
            $scope.name = data.hello;
            //$scope.users = data.users;
            console.log(data.hello);
        });

        ///var sockets = io.connect();
        //sockets.emit('connected', { hello:"world"});
        // mobile.isMobile()
        socket.emit('connected', { hello:"world", isMobile:mobile.isMobile()});

  


        //console.log("phone:"+md.phone()+"tablet:"+md.tablet());
        /*
         $document.ready(function(){

         });
         console.


         /*
         if(){
         socket.emit('connect', { hello:"world"});
         }
         */

    });