angular.module('appFormSlide',[])

    .controller('ctrlFormSlide', function ($scope,$attrs) {

        var list= $scope.list=angular.isDefined($attrs.listItems) ? $scope.$eval($attrs.listItems) : [] ;

        $scope.direction = 'left';
        $scope.currentIndex = 0;

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
    })

    .directive('formSlide',function($timeout){
        return{
            restrict:'EC',
            transclude:true,
            scope:true,
            controller:'ctrlFormSlide',
            template:
            '<div ng-transclude class="content_slide"></div>'+
            ' <div class="nav">'+
               '<ul class="dots">'+
                 '<li class="btn dot" ng-repeat="slide in list" ng-class="{active:isCurrentSlideIndex($index)}" ng-click="setCurrentSlideIndex($index)">'+
                  '<span>{{$index+1}}</a>'+
                  '</li>'+     
                '</ul>'+
           '</div>',
            link:function(scope,iElement,attr,ctrl){
                console.log(iElement);
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
                console.log(tabsCtrl);
                
            },
            template:'<div ng-transclude ng-show="selected" ></div>'
        };
    })

