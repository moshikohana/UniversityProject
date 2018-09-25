angular.module("myApplication").controller("AdminCtrl",["$scope","administrationService","adminService","universityService","$state","$rootScope",function($scope,administrationService,adminService,universityService,$state,$rootScope) {

    function init() {
        $scope.clientArrayAdministrationMainContainer = administrationService.clientArrayAdminService;
        $scope.user = {};
        $scope.user.userId = "";
        $scope.user.userName = "";
        $scope.user.userEmail = "";
        $scope.user.userImg = "";
        $scope.user.userRole = "administrator";
        $scope.myVar = false;
        $scope.isCurrentUser = true;
        $scope.isOwner = true;
    }

    $scope.editAdmin = function(id) {
        for (var i = 0; i < $scope.clientArrayAdministrationMainContainer.length; i++) {
            if ($scope.clientArrayAdministrationMainContainer[i].userId == id) {
                $scope.myVar = true;
                $scope.user.userId = $scope.clientArrayAdministrationMainContainer[i].id;
                $scope.user.userName = $scope.clientArrayAdministrationMainContainer[i].userName;
                $scope.user.userEmail = $scope.clientArrayAdministrationMainContainer[i].userEmail;
                $scope.user.userImg = $scope.clientArrayAdministrationMainContainer[i].userImg;
                $scope.userRole = $scope.clientArrayAdministrationMainContainer[i].role;
            }
        }

        if($rootScope.user.userName == $scope.user.userName ){
            $scope.isCurrentUser = false;
        }
        else{
            $scope.isCurrentUser = true;
        }
    };

   $scope.deleteAdminCanceled = function () {
       var newEle = angular.element('<div class="alert alert-warning" role="alert" style="margin: 0px; padding: 10px"><center><strong>Admin Will Not Delete </strong> thank you :)</center></div>');
       var target = document.getElementById('deleteAdminCanceled');
       angular.element(target).append(newEle);
       jQuery(target).fadeIn(1000);
       setTimeout(function(){jQuery(target).fadeOut(1000); }, 5000);
   };

   $scope.saveEditedUserBTN = function (){

           adminService.editUser($scope.user).then(function (res) {
           $state.transitionTo('Administration', null, {reload: true, notify: true});
           }, function (err) {
               console.log(err);
           })

   };

    $scope.confirmDelete = function() {
        if (confirm("Are you sure you want to delete this Administrator?") == true) {
            $scope.deleteUserBTN();
        } else {
            $scope.deleteAdminCanceled();
        }
    };

    $scope.deleteUserBTN = function (){
        adminService.deleteAdmin($scope.user).then(function(res){
            $state.transitionTo('Administration', null, {reload: true, notify:true});
        },function(err){
            console.log(err);
        });
    };

    return init();
}]);