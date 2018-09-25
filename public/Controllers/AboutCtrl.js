angular.module("myApplication").controller("AboutCtrl",["$scope",function($scope){

    function init(){
        $scope.header = "About Page";
    }
    return init();
}]);
