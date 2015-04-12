
angular.module('slideRemoteApp',['ngTouch'])

    .factory('mobile',function(){
        var md = new MobileDetect(window.navigator.userAgent);

        function typeDevice(){
            if(md.phone()!== null ||  md.tablet() !== null){
                return 'mobile';
            }else{
                isMobile=false;
                return 'desktop';
            }
        }

        function getIsMobile(){
            if(md.phone()!== null ||  md.tablet() !== null){
                return true;
            }else{
                return false;
            }
            
        }

        return {
            typeDevice:typeDevice(),
            getIsMobile:getIsMobile
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

    .directive('userConnected',function(){
        return{
            restrict:'AE',
            scope:{
                name:'@'
            },
            template:'<i class="fa fa-user"></i><span>{{name}}</span>',
            link:function($scope,element,att){
                console.log($scope);
            }
        }
    })


    .controller('appCtrlSocket',function($scope,mobile,socket){
        $scope.typedevice=mobile.typeDevice;
        $scope.isMobile=mobile.getIsMobile();
        $scope.codeMobile="";

        $scope.messageForDevice= ( $scope.isMobile )? 'Choose your Mobile device code' : 'Enter Mobile device code';
        $scope.messageButtonSend=  ( !$scope.isMobile )? 'Save Code' :'Send';

        $scope.user = {
            nickname: '',
            codeMobile:'',
            typedevice: mobile.typeDevice,
            send_message:'',
            correct:false,
        };

        $scope.clients =[];
        
        
        
        ////////////////////////////////////////////HANDLER SOCKETS///////////////////////////////////////////////////////

        socket.on('init', function (msg) {
            $scope.user.correct=msg.correct;
            $scope.user.send_message=msg.send_message;
            
             if($scope.isMobile){
                if(msg.correct){
                    $scope.messageButtonSend = 'Start to Slide';
                   }
                }else{
                  if(msg.correct){
                      $scope.messageButtonSend = 'Join to Slide';
                      $scope.clients=msg.clients;
                   }
                }
        });
        
        
        socket.on('newClient',function(msg){
               var newclient ={name: msg.nickname};
               $scope.clients.push(newclient);
        });
        
        socket.on('disconnect_user',function(msg) {
            console.log("sasasasas");
            console.log(msg);
        });
        
        
        $scope.sendCode=function(){
            if($scope.user.nickname!='' && $scope.user.codeMobile !="" ){
                if(!$scope.user.correct){
                    socket.emit('connected',$scope.user,function(){ });
                }else{
                    
                    if($scope.user.typedevice == 'mobil'){
                        
                        console.log('start to Slide');
                    }else{
                        
                    }
                    
                }
            }else{
                console.log('error');
            }

        }
        
        ///////////////////////////////////////////////////////////////////////////////////////////////////////

    });