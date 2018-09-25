angular.module("myApplication").service("universityService",["$http","$rootScope","$q","$state",function($http,$rootScope,$q,$state){
    this.isEdited = true;
    this.clientArrayStudentsUniversity = [];
    this.clientArrayCourses = [];
    this.clientArrayCoursesService = [];
    this.viewCourseService = function(course) {
    this.clientArrayCoursesService.splice(0, 1);
    this.clientArrayCoursesService.push(course);
    $state.go('University.courses');
    var localUrl = '/getCourseUsers';
    var _data = course.id;
       return $http({
           method:'get',
           url:$rootScope.url + localUrl,
           params: {data: _data}
       })
    };

    this.clientArrayStudents = [];
    this.studentCoursesArray = [];
    this.studentCourses = function(courses) {
        this.studentCoursesArray = courses;

    };

    this.courseStudensArray = [];
    this.CourseStudents = function(students) {
        this.courseStudensArray = students;
    };

    this.clientArrayStudentsService = [];
    this.viewStudentService = function(user) {
        this.clientArrayStudentsService.splice(0, 1);
        this.clientArrayStudentsService.push(user);
        $state.go('University.students');
        var localUrl = '/getUserCourses';
        var _data = user.id;
        return $http({
            method:'get',
            url:$rootScope.url + localUrl,
            params: {data: _data}
        })
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

    this.registerCourse = function(user){
        var localUrl = '/registerCourse';
        var _data = user;

        return $http({
            method:'post',
            url:$rootScope.url + localUrl,
            data:_data
        })
    };

    this.getUsers = function(){

        $rootScope.clientArrStudents = [];
        var defer  = $q.defer();
        var localUrl = '/getUsers';
        var myPromise =  $http({
            method:'GET',
            url: $rootScope.url + localUrl,
        });

        myPromise.then(function(success){
            defer.resolve(success.data);
            for (var i = 0; i < success.data.length; i++) {
                if (success.data[i].role == "student") {
                    $rootScope.clientArrStudents.push(success.data[i]);
                }
                if (success.data[i].role == "administrator") {
                }
            }
        },function(err){
            defer.reject(err);
        });
        return defer.promise;
    };

    this.getCourses = function(){
        var defer  = $q.defer();
        var localUrl = '/getCourses';
        var myPromise =  $http({
            method:'GET',
            url: $rootScope.url + localUrl,
        });

        myPromise.then(function(success){
            defer.resolve(success.data);

        },function(err){
            defer.reject(err);
        });

        return defer.promise;
    }

}]);
