
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

        $scope.clients =[{ name:'john'},{ name:'julian'},{ name:'john'},{ name:'carlos'},{ name:'pedro'}];

        socket.on('init', function (msg) {
            $scope.user.correct=msg.correct;
            $scope.user.send_message=msg.send_message;
            console.log('sadas');

            if($scope.isMobile){
                $scope.messageButtonSend = 'Start to Slide';
            }else{
                $scope.messageButtonSend = 'Join to Slide';
            }

        });

        $scope.sendCode=function(){
            if($scope.user.nickname!='' && $scope.user.codeMobile !="" ){
                if(!$scope.user.correct){
                    socket.emit('connected',$scope.user,function(){ });
                }else{
                    console.log('start to Slide');
                }
            }else{
                console.log('error');
            }

        }

    });