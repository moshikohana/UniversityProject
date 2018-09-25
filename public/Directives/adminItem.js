angular.module("myApplication").directive("adminItem",function(){

    return {

        restrict:'E',
        templateUrl:'Directives/adminItem.html',
        scope:{
            id:'=',
            userImg: '=',
            userName:'=',
            userEmail:'=',
            viewAdmin:'&',
            editAdmin:'&',
            deleteAdmin:'&',

        },
        link: function(scope,element,attribute){
        },

    }

});

