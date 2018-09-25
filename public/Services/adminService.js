angular.module("myApplication").service("adminService",["$http","$rootScope","$q",function($http,$rootScope,$q){

    this.editUser = function(user){
        var localUrl = '/editUser';
        var _data = user;

        return $http({
            method:'post',
            url:$rootScope.url + localUrl,
            data:_data

        })
    };

    this.deleteAdmin = function(user){
        var localUrl = '/deleteUser';
        var _data = user;

        return $http({
            method:'post',
            url:$rootScope.url + localUrl,
            data:_data

        })
    };
}]);
