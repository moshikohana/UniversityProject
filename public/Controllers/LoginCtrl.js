angular.module("myApplication").controller("LoginCtrl",["$scope","$rootScope","loginService","$state",function($scope,$rootScope,loginService,$state){

    function init(){
        $scope.OrangeAlert();
    }

    $scope.logInBTN = function() {
       loginService.login($scope.user).then(function (res) {

           
           if(res.data.length == 0 ){
               
               $rootScope.loggedIn = false;
               jQuery("#OrangeAlert").remove();
               $scope.RedAlert();
               setTimeout(function(){ $scope.RedAlert(); $state.go('Registration'); }, 2000);
               
               
            }
            
            else {
                
                $rootScope.user = res.data[0];
                $rootScope.role = res.data[0].role;
                $rootScope.loggedIn = true;
                jQuery("#OrangeAlert").remove(); 
                
                if(res.data[0].role == "sale") {
                    $scope.GreenAlert();   
                    setTimeout(function(){ $state.go('University'); }, 2000);
            
                }
                else if(res.data[0].role == "administrator") {
                    $scope.GreenAlert();
                    setTimeout(function(){ $state.go('Administration'); }, 2000);
                       
                }
                else if(res.data[0].role == "owner") {
                    $scope.GreenAlert();
                    setTimeout(function(){ $state.go('Administration'); }, 2000);
            
                }

            }
                  
       }, function (err) {
           console.log(err);
           
       })
    };

    $scope.GreenAlert = function () {
        var newEle = angular.element('<div class="alert alert-success" role="alert" style="margin: 0px; padding: 10px"><center><strong>LogIn Succeed</strong> take care</center></div>');
        var target = document.getElementById('GreenAlert');
        angular.element(target).append(newEle);
        jQuery(target).fadeIn(1000);
        setTimeout(function(){jQuery(target).fadeOut(1000); }, 5000);
    };

    $scope.logOutAlert = function () {
        var newEle = angular.element('<div class="alert alert-success" role="alert" style="margin: 0px; padding: 10px"><center><strong>LogOut Succeed</strong> we hope you enjoy our app</center></div>');
        var target = document.getElementById('logOutAlert');
        angular.element(target).append(newEle);
        jQuery(target).fadeIn(1000);
        setTimeout(function(){jQuery(target).fadeOut(1000); }, 5000);
    };

    $scope.RedAlert = function () {
        var newEle = angular.element('<div class="alert alert-danger" role="alert" style="margin: 0px; padding: 10px"><center><strong>Wrong User Name Or Password</strong> please try again</center></div>');
        var target = document.getElementById('RedAlert');
        angular.element(target).append(newEle);
        jQuery(target).hide().fadeIn(1000);
        setTimeout(function(){jQuery(target).fadeOut(1000); }, 5000);
    };

    $scope.OrangeAlert = function () {
        var newEle = angular.element('<div class="alert alert-warning" role="alert" style="margin: 0px; padding: 10px"><center><strong>You Need To Register First</strong> please register to continue</center></div>');
        var target = document.getElementById('OrangeAlert');
        angular.element(target).append(newEle);
        setInterval(function(){jQuery(target).fadeIn(1000);
            setTimeout(function(){jQuery(target).fadeOut(2000); }, 2000);
        }, 4000)
    };

    return init();

}]);