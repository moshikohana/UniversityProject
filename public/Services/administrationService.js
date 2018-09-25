angular.module("myApplication").service("administrationService",["$http","$rootScope","$q","$state",function($http,$rootScope,$q,$state){

    this.clientArrayAdmin = [];
    this.clientArrayAdminService = [];
    this.viewAdmin = function(user) {
        this.clientArrayAdminService.splice(0, 1);
        this.clientArrayAdminService.push(user);
        $state.go("Administration.admin");
    };

    this.getUsers = function(){
        var defer  = $q.defer();
        var localUrl = '/getUsers';
        var myPromise =  $http({
            method:'GET',
            url: $rootScope.url + localUrl
        });

        myPromise.then(function(success){
            defer.resolve(success.data);
        },function(err){
            defer.reject(err);
        });

        return defer.promise;
    };

    this.register = function(user){
        var localUrl = '/register';
        var _data = user;

        return $http({
            method:'post',
            url:$rootScope.url + localUrl,
            data:_data
        })
    };

}]);