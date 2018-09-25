angular.module("myApplication").service("registerService",["$http","$rootScope",function($http,$rootScope){

    this.register = function(user){
        var localUrl = '/register';
        var _data = user;

        return $http({
            method:'post',
            url:$rootScope.url + localUrl,
            data:_data
        })
    }
}]);