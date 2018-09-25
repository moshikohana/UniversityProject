angular.module("myApplication").controller("AdministrationCtrl",["$scope","administrationService","$rootScope",function($scope,administrationService,$rootScope){

    function init(){

        $scope.header = "Administration Page";
        $scope.clientArrayOwner = [];
        $scope.user = {};
        $scope.user.userName = "";
        $scope.user.userEmail = "";
        $scope.user.userPassword = "";
        $scope.user.userImg = "";
        $scope.user.userRole = "administrator";
        $scope.isOwner = false;

        $scope.standByAdminAlert();
        $scope.clientArrayAdminsAdministration = [];

        administrationService.getUsers().then(function (user) {
            for(var i=0;i<user.length;i++){
                if(user[i].role == "administrator") {
                    $scope.clientArrayAdminsAdministration.push(user[i]);
                }
                else if(user[i].role == "owner") {
                    if($rootScope.user.role == "owner"){
                        //alert("Owner is logged in");
                        $scope.clientArrayAdminsAdministration.push(user[i]);
                    }
                }
            }

        }, function (err) {
            console.log("Problem with getting users");
        });
    }

    $scope.viewAdmin = function(id) {

        for (var i = 0; i < $scope.clientArrayAdminsAdministration.length; i++) {
            if ($scope.clientArrayAdminsAdministration[i].id == id) {
                administrationService.isEditBtn = true;
                administrationService.viewAdmin($scope.clientArrayAdminsAdministration[i]);

            }
        }
    };

    $scope.saveAdministrationBTN = function() {

        administrationService.register($scope.user).then(function (res) {

            $scope.adminAddSuccessAlert();
            jQuery("#standByAdminAlert").remove();

            administrationService.clientArrayAdmin.push(Object.assign({}, $scope.user));
            console.log($scope.user.userRole + " " + $scope.user.userName + " Registered successfully");
            init();
        }, function (err) {

            $scope.adminAddFailAlert();
            console.log($scope.user.userRole + " " + $scope.user.userName + " Registered failed");

        })
    };

    $scope.adminAddSuccessAlert = function () {
        var newEle = angular.element('<div class="alert alert-success" role="alert" style="margin: 0px; padding: 10px"><center><strong>Admin Added Successfully</strong> thank you :)</center></div>');
        var target = document.getElementById('adminAddSuccessAlert');
        angular.element(target).append(newEle);
        jQuery(target).fadeIn(1000);
        setTimeout(function(){jQuery(target).fadeOut(1000); }, 5000);
    };

    $scope.adminAddFailAlert = function () {
        var newEle = angular.element('<div class="alert alert-danger" role="alert" style="margin: 0px; padding: 10px"><center><strong>Admin Added Failed</strong> sorry :(</center></div>');
        var target = document.getElementById('adminAddFailAlert');
        angular.element(target).append(newEle);
        jQuery(target).hide().fadeIn(1000);
        setTimeout(function(){jQuery(target).fadeOut(1000); }, 5000);
    };

    $scope.standByAdminAlert = function () {
        var newEle = angular.element('<div class="alert alert-info" role="alert" style="margin: 0px; padding: 10px"><center><strong>Add Administrator</strong> press the + button</center></div>');
        var target = document.getElementById('standByAdminAlert');
        angular.element(target).append(newEle);
        setInterval(function(){jQuery(target).hide().fadeIn(1000);
            setTimeout(function(){jQuery(target).fadeOut(2000); }, 2000);
        }, 4000)
    };

    var images = [
        "../media/admin1.jpg",
        "../media/admin2.jpg",
        "../media/admin3.jpg",
    ];

    var imageHeadAdmin = document.getElementById("image-head-admin");
    var i = 0;

    setInterval(function() {
        imageHeadAdmin.style.backgroundImage = "url(" + images[i] + ")";
        i = i + 1;
        if (i == images.length) {
            i =  0;
        }
        jQuery(imageHeadAdmin).hide().fadeIn(1000);
    },8000);

    return init();

}]);