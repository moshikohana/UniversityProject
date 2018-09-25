angular.module("myApplication").controller("UniversityCtrl",["$scope","$rootScope","universityService","studentService","$state",function($scope,$rootScope,universityService,studentService,$state){

    function init() {
        $scope.header = "University Page";
        $scope.standByAddingAlert();
        $scope.user = {};
        $scope.user.userName = "";
        $scope.user.userEmail = "";
        $scope.user.userPassword = "";
        $scope.user.userImg = "";
        $scope.user.userRole = "student";
        $scope.user.courses=[];
        $rootScope.ngIfVar = true;

        if($rootScope.user.role == "sale"){
            $scope.salesState = false;
        }
        else if($rootScope.user.role == "administrator"){
            $scope.salesState = true;
        }
        else if($rootScope.user.role == "owner"){
            $scope.salesState = true;
        }

        $scope.course = {};
        $scope.course.couseId = "";
        $scope.objectForValueOfCheckBox = {};
        $scope.course.courseName = "";
        $scope.course.courseDesc = "";
        $scope.course.courseImg = "";
        $scope.course.numberOfStudents ="";
        $scope.course.courseStudents = "ABC";
        $scope.checkboxModel = {};
        $scope.checkboxModel.value1 = "";
        $scope.clientArrayStudentsUniversity =  $rootScope.clientArrStudents;
        $scope.clientArrayCoursesUniversity = [];
        $scope.myVar = false;
        $scope.universityHide = false;
        $scope.newIdCoursesOfStudents = [];
        $scope.objectForValueOfCheckBox = {};

        universityService.getUsers().then(function (user) {
            $scope.clientArrayStudentsUniversity = $rootScope.clientArrStudents;

        }, function (err) {
           console.log("Problem with getting users ", err);
           });

        universityService.getCourses().then(function (course) {
            for(var i=0; i<course.length; i++){
                course[i].courseStudents = "";
            }
            $scope.clientArrayCoursesUniversity = course;
            universityService.clientArrayCourses = $scope.clientArrayCoursesUniversity;
        }, function (err) {
            console.log("Problem with getting users ", err);
        });
    }

    $scope.saveStudentBTN = function() {
        $scope.getAllSelected();
        universityService.register($scope.user).then(function (res) {
            $scope.addingSuccessAlert();
            jQuery("#standByAddingAlert").remove();
            universityService.clientArrayStudents.push(Object.assign({}, $scope.user));
            console.log($scope.user.userRole + " " + $scope.user.userName + " Registered successfully");
            init();
        }, function (err) {
            $scope.addingFailAlert();
            console.log($scope.user.userRole + $scope.user.userName + " Registered failed");
        })
    };

    $scope.saveCourseBTN = function() {
        universityService.registerCourse($scope.course).then(function (res) {
            $scope.addingSuccessAlert();
            jQuery("#standByAddingAlert").remove();
            $scope.clientArrayCoursesUniversity.push(Object.assign({}, $scope.course));
        }, function (err) {
            $scope.addingFailAlert();
            alert($scope.course.courseName + " Registered failed");
        });
        $state.transitionTo('University.courses', null, {reload: true, notify:true});
    };

    $scope.viewCourse = function(id) {
        $scope.universityHide = true;
        for (var i = 0; i < $scope.clientArrayCoursesUniversity.length; i++) {
            if ($scope.clientArrayCoursesUniversity[i].id == id) {
                $scope.course2 = $scope.clientArrayCoursesUniversity[i];
            }
        }
        universityService.viewCourseService($scope.course2).then(function(res){
            universityService.CourseStudents(res.data);
            $state.transitionTo('University.courses', null, {reload: true, notify:true});
        },function(err){
            console.log(err);
        });
    };

    $scope.viewStudent = function(id) {
        for (var i = 0; i < $scope.clientArrayStudentsUniversity.length; i++) {
            if ($scope.clientArrayStudentsUniversity[i].id == id) {
                universityService.viewStudentService($scope.clientArrayStudentsUniversity[i]).then(function (res) {
                universityService.studentCourses(res.data);
                $state.transitionTo('University.students', null, {reload: true, notify:true});
            }, function (err) {
               console.log(err)
               });
            }
        }
    };

    $scope.getAllSelected = function(){
        angular.forEach($scope.objectForValueOfCheckBox,function(key,value){
            var intValue = parseInt(value);
            if(key) {
                $scope.user.courses.push(intValue);
            }
        })
    };

    $scope.standByAddingAlert = function () {
        var newEle = angular.element('<div class="alert alert-info" role="alert" style="margin: 0px; padding: 10px"><center><strong>Add / Edit Courses Or Students</strong> press the + button</center></div>');
        var target = document.getElementById('standByAddingAlert');
        angular.element(target).append(newEle);
        setInterval(function(){jQuery(target).fadeIn(1000);
            setTimeout(function(){jQuery(target).fadeOut(2000); }, 2000);
        }, 4000)
    };

    $scope.addingSuccessAlert = function () {
        var newEle = angular.element('<div class="alert alert-success" role="alert" style="margin: 0px; padding: 10px"><center><strong>Added Successfully</strong> thank you :)</center></div>');
        var target = document.getElementById('addingSuccessAlert');
        angular.element(target).append(newEle);
        jQuery(target).fadeIn(1000);
        setTimeout(function(){jQuery(target).fadeOut(1000); }, 5000);
    };

    $scope.addingFailAlert = function () {
        var newEle = angular.element('<div class="alert alert-danger" role="alert" style="margin: 0px; padding: 10px"><center><strong>Adding Failed</strong> sorry :(</center></div>');
        var target = document.getElementById('addingFailAlert');
        angular.element(target).append(newEle);
        jQuery(target).hide().fadeIn(1000);
        setTimeout(function(){jQuery(target).fadeOut(1000); }, 5000);
    };

    var images = [
        "../media/university1.jpg",
        "../media/university2.jpg",
        "../media/university3.jpg",

    ];

    var imageHead = document.getElementById("image-head");
    var i = 0;
    setInterval(function() {
        imageHead.style.backgroundImage = "url(" + images[i] + ")";
        i = i + 1;
        if (i == images.length) {
            i =  0;
        }
        jQuery(imageHead).hide().fadeIn(1000);
    },8000);

    return init();

}]);
