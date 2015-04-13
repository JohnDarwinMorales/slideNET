angular.module('appFormSlide',[])

    .controller('ctrlFormSlide', function ($scope,$attrs) {

        var list= $scope.list=angular.isDefined($attrs.listItems) ? $scope.$eval($attrs.listItems) : [] ;

        $scope.$watch(function(){
            return $scope.$eval($attrs.listItems);
        },function(newVal){
            //console.log(newVal, $attrs)
            if(angular.isDefined($attrs.listItems)){
                var list= $scope.list=angular.isDefined($attrs.listItems) ? $scope.$eval($attrs.listItems) : [] ;
            }
           // $scope.isCurrentParentItem=angular.isDefined($attrs.isCurrentParentItem) ? $scope.$eval($attrs.isCurrentParentItem) : false ;
        });


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

    .directive('eonFormSlide',function($timeout){
        return{
            restrict:'EC',
            transclude:true,
            scope:{},
            controller:'ctrlFormSlide',
            scope:{
                autoSlide:"@",
                transition:"@",
                time:'@',
                transitionRand:'@transitionRand'
            },
            templateUrl:'/Frontend/js/directives/page/form-slide/form-slide.html',
            link:function(scope,iElement,attr,ctrl){
                /*
                 scope.getTime=(scope.time)? scope.$eval(scope.time) : 3000;
                 scope.getTransitionRand=(scope.transitionRand)? scope.$eval(scope.transitionRand) : false;
                 scope.overFlow=true;

                 console.log(scope.list);



                 var tick = function() {
                 if(scope.$eval(scope.autoSlide)){
                 $timeout(tick, scope.getTime);
                 scope.prevSlide();
                 }
                 }
                 $timeout(tick, scope.getTime);

                 /*
                 var setOverflow=function(){
                 var visible= (scope.overFlow)? 'visible':'hidden';
                 var element=angular.element(iElement[0].firstChild);
                 element.addClass('no-overflow');
                 console.log(element);
                 }

                 scope.$watch('overFlow', function() {
                 setOverflow();
                 });
                 */
            }


        }
    })


    .directive('itemForm', function() {
        return {
            require: '^eonFormSlide',
            restrict: 'CE',
            transclude: true,
            scope: {
                title: '@nameItem'
            },
            link: function(scope, element, attrs, tabsCtrl) {
                tabsCtrl.addItem(scope);
                //console.log(tabsCtrl);
            },
            templateUrl:'/Frontend/js/directives/page/form-slide/item-form.html'
        };
    })

/*
 .directive('auxSlide'){
 return {
 require: '^eonFormSlide',
 restrict: 'CE',
 transclude: true,
 link: function(scope, element, attrs, tabsCtrl) {
 scope.currentItem=attrs.currentItemParent;
 scope.$watch('currentItem',function(newVal){
 console.log(newVal);
 });
 },
 };
 }
 */