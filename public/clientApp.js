
angular.module("myApplication",["ui.router","ui.bootstrap"]).config(["$httpProvider","$stateProvider","$urlRouterProvider",function($httpProvider,$stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/login')
    $stateProvider
   .state(
        'Login',{
            url:'/login',
            controller:'LoginCtrl',
            templateUrl:'views/Login.html',

        }
   ).state(
        'Registration',{
            url:'/registration',
            controller:'RegistrationCtrl',
            templateUrl:'views/Registration.html',
        }
   ).state(
        'University',{

            url:'/university',
            controller:'UniversityCtrl',
            templateUrl:'views/University.html',
        }
   ).state(
        'Administration',{
            url:'/administration',
            controller:'AdministrationCtrl',
            templateUrl:'views/Administration.html',
        }

   ).state(
        'About',{
            url:'/about',
            controller:'AboutCtrl',
            templateUrl:'views/About.html',

        })
   .state(
        'University.courses',{

            url:'/courses',
            controller:'CoursesCtrl',
            templateUrl:'views/courses.html',
        })
   .state(
        'University.students',{
             url:'/students',
             controller:'StudentsCtrl',
             templateUrl:'views/students.html',
        })
   .state(
        'Administration.admin',{
             url:'/admin',
             controller:'AdminCtrl',
             templateUrl:'views/admin.html',
        })

}]).run(["$rootScope","$state","loginService",function($rootScope,$state,loginService){
    console.log("Client side is running");

    $rootScope.productionUrl = "https://moshiko-university-project.herokuapp.com";
    $rootScope.devUrl = "http://localhost:5000";
    $rootScope.url = $rootScope.productionUrl;

    $rootScope.loggedIn = false;
    if ($rootScope.loggedIn == true){

    }

    $rootScope.logOutBTN = function(){
        $rootScope.loggedIn = false;
        console.log("User login status: ", $rootScope.loggedIn);
        $state.go("Login");
        alert($rootScope.user.userName + " Log out success");
    };


    $rootScope.$on('$stateChangeStart',function(event,toState,toParams,fromState) {

    });


    $rootScope.$on('$stateChangeStart',function(event,toState,toParams,fromState) {
         if (toState.name == "University") {
             if ($rootScope.loggedIn == false) {
             alert("Access to University rejected. Register or Login first");
             event.preventDefault();
             $state.go("Login");
             }
         }
    });

    $rootScope.$on('$stateChangeStart',function(event,toState,toParams,fromState) {

        if (toState.name == "Administration") {
            if($rootScope.loggedIn == false) {
                alert("Access to Administration rejected. Register or Login first");
                event.preventDefault();
                $state.go("Login");
            }
            else if ($rootScope.role !== 'administrator') {
                if ($rootScope.role !== 'owner') {
                    alert("Access to Administration rejected. Sale can't enter the Administration Page");
                    event.preventDefault();
                }
         }

         }
    })

}]);





