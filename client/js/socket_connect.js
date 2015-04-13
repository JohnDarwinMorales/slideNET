
angular.module('slideRemoteApp',['ngTouch','ngRoute'])

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
    
        .config(['$routeProvider', '$locationProvider',
              function($routeProvider, $locationProvider) {
                $routeProvider
                  .when('/', {
                    templateUrl: '/templates/log_in.html',
                    //controller: 'BookCtrl',
                    //controllerAs: 'book'
                  })
                
                  .when('/templates/slides/', {
                    templateUrl: '/templates/slide.html',
                   // controller: 'ChapterCtrl',
                   // controllerAs: 'chapter'
                  });
                
                $locationProvider.html5Mode(false);
        }])


    .controller('appCtrlSocket',function($scope,mobile,socket,$route, $routeParams, $location){
        
        $scope.typedevice=mobile.typeDevice;
        $scope.isMobile=mobile.getIsMobile();
        $scope.codeMobile="";
        
        //$scope.link_button="/#/";

        $scope.messageForDevice= ( $scope.isMobile )? 'Choose your Mobile device code' : 'Enter Mobile device code';
        $scope.messageButtonSend=  ( !$scope.isMobile )? 'Save Code' :'Send';
      

        $scope.user = {
            nickname: '',
            codeMobile:'',
            typedevice: mobile.typeDevice,
            send_message:'',
            startToSlide:true,
            correct:false
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
                      $scope.user.startToSlide=msg.startToSlide;
                      $scope.user.send_message="Waiting to "+ msg.creator+ " to start...";
                      $scope.clients=msg.clients;
                   }
                }
        });
        
        socket.on('init_slideToStart',function(msg){
            if(msg.startToSlide){
               //$scope.slide.currentIndex=msg.currentIndex;
               console.log(msg.currentIndex);
               window.location ="/#/templates/slides/";
            }
        });
        
        
        socket.on('newClient',function(msg){
               var newclient ={name: msg.nickname};
               $scope.clients.push(newclient);
        });
        
        socket.on('disconnect_user',function(msg) {
           $scope.clients.splice(msg.indexClient,1);
        });
        
        socket.on('disconnect_client',function(msg) {
           $scope.clients.splice(msg.indexClient,1);
        });
        
        
        
        
        $scope.sendCode=function(){
            if($scope.user.nickname!='' && $scope.user.codeMobile !="" ){
                if(!$scope.user.correct){
                    socket.emit('connected',$scope.user);
                }else{
                    if($scope.isMobile && $scope.user.correct ){
                       socket.emit('initslide',$scope.user);
                       window.location ="/#/templates/slides/";
                    }else if(!$scope.isMobile && $scope.user.correct ) {
                       socket.emit('joinToSlide',$scope.user);
                       //console.log('start to Slide in Desktop');
                    }
                    
                }
            }else{
                console.log('error');
            }

        }
        
        ///////////////////////////////////////////////////////////////////////////////////////////////////////

    });