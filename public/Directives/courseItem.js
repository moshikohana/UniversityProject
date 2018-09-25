angular.module("myApplication").directive("courseItem",function(){

    return {

        restrict:'E',
        templateUrl:'Directives/courseItem.html',
/*        template: "<ol> <li ng-repeat='p in courseStudents'>STAM MASHEHU: {{p}} </li></ol> ",*/
        scope:{
            id:'=',
            courseImg: '=',
            courseName:'=',
            courseDesc:'=',
            numberOfStudents:'=',
            courseStudents:'=',
            salesState: '=',
            universityHide: '=',
            viewCourse:'&',
            editCourse:'&'

        },
        link: function(scope,element,attribute){
        },

    }

})/**
 * Created by nirsa on 30/05/2017.
 */
