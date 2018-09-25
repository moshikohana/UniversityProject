angular.module("myApplication").controller("RegistrationCtrl", ["$scope","registerService","$state",function($scope,registerService,$state){

    function init(){
        $scope.user = {};
        $scope.user.userName = "";
        $scope.user.userPassword = "";
        $scope.user.userEmail = "";
        $scope.user.userImg = "";
        $scope.user.userRole = "";
        $scope.registrationStandBy();
    }

    $scope.getVal=function(){
    console.log()
    };

    $scope.saveUserBTN = function() {

        registerService.register($scope.user).then(function (res) {
            console.log(res);
            $scope.registrationSuccess();
            jQuery("#registrationStandBy").remove();


            $state.go("Login");
            console.log($scope.user.userRole + " " + $scope.user.userName + " Registered successfully");

        }, function (err) {

            $scope.registrationNotSuccess();
            alert($scope.user.userRole + " " + $scope.user.userName + " Registered failed");
        })
    };

    $scope.registrationSuccess = function () {
        var newEle = angular.element('<div class="alert alert-success" role="alert" style="margin: 0px; padding: 10px"><center><strong>Registration Succeed</strong> you can proceed to log in</center></div>');
        var target = document.getElementById('registrationSuccess');
        angular.element(target).append(newEle);
        jQuery(target).fadeIn(1000);
        setTimeout(function(){jQuery(target).fadeOut(1000); }, 5000);
    };

    $scope.registrationNotSuccess = function () {
        var newEle = angular.element('<div class="alert alert-danger" role="alert" style="margin: 0px; padding: 10px"><center><strong>Registration Did not Succeed</strong> please try again</center></div>');
        var target = document.getElementById('registrationNotSuccess');
        angular.element(target).append(newEle);
        jQuery(target).hide().fadeIn(1000);
        setTimeout(function(){jQuery(target).fadeOut(1000); }, 5000);
    };

    $scope.registrationStandBy = function () {
        var newEle = angular.element('<div class="alert alert-info" role="alert" style="margin: 0px; padding: 10px"><center><strong>Hello :)</strong> please register to continue</center></div>');
        var target = document.getElementById('registrationStandBy');
        angular.element(target).append(newEle);
            setInterval(function(){jQuery(target).fadeIn(1000);
            setTimeout(function(){jQuery(target).fadeOut(2000); }, 2000);
            }, 4000)
    };

    return init();

}]);