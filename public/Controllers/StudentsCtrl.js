angular.module("myApplication").controller("StudentsCtrl",["$scope","$rootScope","$state","universityService","studentService",function($scope,$rootScope,$state,universityService,studentService) {

    function init() {
        $scope.clientArrayStudentsMainContainer = universityService.clientArrayStudentsService;
        $scope.clientArrayCoursesUniversity = universityService.clientArrayCourses;
        $scope.objectForValueOfCheckBox = {};
        $scope.course = {};
        $scope.user = {};
        $scope.user.userId = "";
        $scope.user.userName = "";
        $scope.user.userEmail = "";
        $scope.user.userImg = "";
        $scope.user.userRole = "student";
        $scope.user.courses = universityService.studentCoursesArray;
        $scope.myVar = false;
    }

    $scope.editStudent = function(id) {
        for (var i = 0; i < $scope.clientArrayStudentsMainContainer.length; i++) {
            if ($scope.clientArrayStudentsMainContainer[i].userId == id) {
                $scope.myVar = true;
                $scope.user.userId = $scope.clientArrayStudentsMainContainer[i].id;
                $scope.user.userName = $scope.clientArrayStudentsMainContainer[i].userName;
                $scope.user.userEmail = $scope.clientArrayStudentsMainContainer[i].userEmail;
                $scope.user.userImg = $scope.clientArrayStudentsMainContainer[i].userImg;
            }
        }
        for(var j=0; j < $scope.user.courses.length; j++){
            $scope.objectForValueOfCheckBox[$scope.user.courses[j].lnk_courseId] = true;
            $scope.course.id = $scope.user.courses[j].lnk_courseId;
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

    $scope.saveEditedStudentBTN = function () {
        $scope.user.courses = [];
        $scope.getAllSelected();
        studentService.editStudent($scope.user).then(function (res) {
            $state.transitionTo('University', null, {reload: true, notify:true});
        });
    };

    $scope.confirmDelete = function() {
        if (confirm("Are you sure you want to delete this Student?") == true) {
            $scope.deleteStudentBTN();
        }
        else {
            $scope.deleteStudentCanceled();
        }
    };

    $scope.deleteStudentBTN = function (){
        studentService.deleteStudent($scope.user).then(function(res){
            $state.transitionTo('University', null, {reload: true, notify:true});
        },function(err){
            console.log(err);
        });
    };

    $scope.deleteStudentCanceled = function () {
        var newEle = angular.element('<div class="alert alert-warning" role="alert" style="margin: 0px; padding: 10px"><center><strong>Student Will Not Delete </strong> thank you :)</center></div>');
        var target = document.getElementById('deleteStudentCanceled');
        angular.element(target).append(newEle);
        jQuery(target).fadeIn(1000);
        setTimeout(function(){jQuery(target).fadeOut(1000); }, 5000);
    };

    return init();

}]);