angular.module("myApplication").directive("studentItem",function(){

    return {

        restrict:'E',
        templateUrl:'Directives/studentItem.html',
        scope:{
            id:'=',
            idEditPressed: '=',
            userImg: '=',
            userName:'=',
            userEmail:'=',

            viewStudent:'&',
            editStudent:'&'
        },
        link: function(scope,element,attribute){
        },

    }

})/**
 * Created by nirsa on 30/05/2017.
 */
