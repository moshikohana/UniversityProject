angular.module("myApplication").controller("CoursesCtrl",["$scope","universityService","courseService","$state","$rootScope",function($scope,universityService,courseService,$state,$rootScope) {

    function init() {
        $scope.clientArrayCoursesMainContainer = universityService.clientArrayCoursesService;
        $scope.course.courseId = "";
        $scope.course = {};
        $scope.course.courseName = "";
        $scope.course.courseDesc = "";
        $scope.course.courseImg = "";
        $scope.course.courseStudents = universityService.courseStudensArray;
        $scope.clientArrayCoursesMainContainer[0].numberOfStudents = $scope.course.courseStudents.length;
        $scope.course.drawStudentsArray = [];
        $scope.StudentArr = [];
        $scope.myVar = false;
        $scope.universityHide = true;
        $scope.ifThereAreStudents = true;

        if($rootScope.user.role == "sale"){
            $scope.salesState = false;
        }
        else if($rootScope.user.role == "administrator"){
            $scope.salesState = true;
        }
    }

    $scope.goToUniversity = function(){
        $state.transitionTo('University', null, {reload: true, notify:true});
    };

    $scope.editCourse = function(id) {

        $rootScope.ngIfVar = false;
        for (var i = 0; i < $scope.clientArrayCoursesMainContainer.length; i++) {
            if ($scope.clientArrayCoursesMainContainer[i].id == id) {

                $scope.myVar = true;
                $scope.course.courseId = $scope.clientArrayCoursesMainContainer[i].id;
                $scope.course.courseName = $scope.clientArrayCoursesMainContainer[i].courseName;
                $scope.course.courseDesc = $scope.clientArrayCoursesMainContainer[i].courseDesc;
                $scope.course.courseImg = $scope.clientArrayCoursesMainContainer[i].courseImg;

            }
        }

        $scope.StudentArr = $rootScope.clientArrStudents;
        for(var j = 0; j < $scope.course.courseStudents.length; j++){
            for(var h = 0; h < $scope.StudentArr.length; h++){
                if($scope.course.courseStudents[j].lnk_userId == $scope.StudentArr[h].id) {
                   $scope.course.drawStudentsArray.push($scope.StudentArr[h]);
                }
            }
        }

        if($scope.course.courseStudents.length > 0){
            $scope.ifThereAreStudents = false;
        }
    };

    $scope.saveEditedCourseBTN = function () {
        courseService.editCourse($scope.course).then(function (res) {
        
            $state.transitionTo('University', null, {reload: true, notify:true});
        })
    };

    $scope.confirmDelete = function() {
        if (confirm("Are you sure you want to delete this Course?") == true) {
            $scope.deleteCourseBTN();
        }
        else {
            $scope.deleteCourseCanceled();
        }
    };

    $scope.deleteCourseBTN = function (){
        courseService.deleteCourse($scope.course).then(function(res){
        $state.transitionTo('University', null, {reload: true, notify:true});
        },function(err){
            console.log(err);
        });
    };

    $scope.deleteCourseCanceled = function () {
        var newEle = angular.element('<div class="alert alert-warning" role="alert" style="margin: 0px; padding: 10px"><center><strong>Course Will Not Delete </strong> thank you :)</center></div>');
        var target = document.getElementById('deleteCourseCanceled');
        angular.element(target).append(newEle);
        jQuery(target).fadeIn(1000);
        setTimeout(function(){jQuery(target).fadeOut(1000); }, 5000);
    };

    return init();
}]);