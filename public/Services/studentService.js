angular.module("myApplication").service("studentService",["$http","$rootScope","$q",function($http,$rootScope,$q){

    this.editStudent = function(user){
        var localUrl = '/editUser';
        var _data = user;
        return $http({
            method:'post',
            url:$rootScope.url + localUrl,
            data:_data
        })
    };

    this.deleteStudent = function(user){
        var localUrl = '/deleteUser';
        var _data = user;
        return $http({
            method:'post',
            url:$rootScope.url + localUrl,
            data:_data
        })
    };
}]);
