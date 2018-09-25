angular.module("myApplication").service("courseService",["$http","$rootScope","$q",function($http,$rootScope,$q){

    this.editCourse = function(user){
        var localUrl = '/editCourse';
        var _data = user;

        return $http({
            method:'post',
            url:$rootScope.url + localUrl,
            data:_data

        })
    };

    this.deleteCourse = function(course){
        var localUrl = '/deleteCourse';
        var _data = course;

        return $http({
            method:'post',
            url:$rootScope.url + localUrl,
            data:_data
        })
    };

}]);
