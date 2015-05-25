angular.module('appFormSlide',['ngTouch'])

    .controller('ctrlFormSlide', function ($scope,$rootScope,$attrs) {
        
        var list= $scope.list=angular.isDefined($attrs.listItems) ? $scope.$eval($attrs.listItems) : [] ;

        $scope.direction = 'left';
        $scope.currentIndex = 0;
        $scope.user=$scope.$parent.user;
        console.log($scope.user);

        $scope.setCurrentSlideIndex = function (index) {
            $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            if( $scope.currentIndex === index){
                $scope.list[index].selected=true;
                return true;
            }else{
                $scope.list[index].selected=false;
                return false;
            }
        };

        $scope.prevSlide = function () {
            $scope.direction = 'left';
            $scope.currentIndex = ($scope.currentIndex < $scope.list.length - 1) ? ++$scope.currentIndex : 0;
            this.currentIndex=$scope.currentIndex;
        };

        $scope.nextSlide = function () {
            $scope.direction = 'right';
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.list.length - 1;
        };

        this.addItem=function(item){
            list.push(item);
        };
        
        this.nextSlide=function(){
            $scope.nextSlide();
        }
        
        this.prevSlide=function(){
            $scope.prevSlide();
        }
        
        if($scope.user.typedevice=="mobile"){
            
           $scope.$watch('currentIndex',function(){
                $scope.user.stateSlide.currentIndex=$scope.currentIndex;
           })
           
        }else{
            $scope.$watch(function(){
              return $scope.user.stateSlide.currentIndex;
            },function(newVal) {
               $scope.currentIndex=newVal;
            })
        }

    })

    .directive('formSlide',function($timeout){
        return{
            restrict:'EC',
            transclude:true,
            controller:'ctrlFormSlide',
            template:
            '<div ng-transclude class="content_slide"></div>'+
            '<div class="nav_rows"><div class="wrapper-rows">'+
                '<i class="fa fa-chevron-left" ng-click="nextSlide()" ></i>'+
                '<i class="fa fa-chevron-right" ng-click="prevSlide()"></i>'+
            '</div></div>'+
            ' <div class="nav">'+
               '<ul class="dots">'+
                 '<li class="btn dot" ng-repeat="slide in list" ng-class="{active:isCurrentSlideIndex($index)}" ng-click="setCurrentSlideIndex($index)">'+
                  '<span>{{$index+1}}</a>'+
                  '</li>'+     
                '</ul>'+
           '</div>',
            link:function(scope,iElement,attr,ctrl){
               // console.log(iElement);
            }
        }
    })


    .directive('itemForm', function() {
        return {
            require: '^formSlide',
            restrict: 'CE',
            transclude: true,
            replace:true,
            scope: {
                title: '@nameItem'
            },
            link: function(scope, element, attrs, tabsCtrl) {
                tabsCtrl.addItem(scope);
                
                scope.nextSlide=function(){
                   tabsCtrl.nextSlide(); 
                }
                scope.prevSlide=function(){
                   tabsCtrl.prevSlide(); 
                }
                
                console.log(scope.title);
                
            },
            template:'<div ng-transclude ng-show="selected" ng-swipe-left="prevSlide()" ng-swipe-right="nextSlide()" ng-class="[title]" class="item"></div>'
        };
    })

