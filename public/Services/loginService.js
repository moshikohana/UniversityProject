angular.module("myApplication").service("loginService",["$http","$rootScope",function($http,$rootScope){

    this.login = function(user){
        var localUrl = '/login';
        var _data = user;
        return $http({
            method:'post',
            url:$rootScope.url + localUrl,
            data:_data
        })
    }
}]);