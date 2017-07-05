var app = angular.module('sample',['ngRoute']);

app.config(route);

app.directive('keep', keep);


function route($routeProvider){
    $routeProvider
    .when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
    })
    .when('/register', {
        templateUrl: 'templates/signup.html',
        controller: 'registerCtrl'
    })
    .when('/user', {
        templateUrl: 'templates/user.html',
        controller: 'demoCtrl'
    })
    .otherwise({ redirectTo: '/login' })
}

function keep(){
    return {
        restrict: 'E',
        templateUrl : 'templates/keep.html',
        replace : true,
        link: function (scope, elem, attrs) {
            // scope.edit = function(indx){
            //     scope.$parent.myvalue = scope.$parent.myvalue== true ? false : true;
            //     scope.$parent.title1= scope.notes[indx].title;
            //     scope.$parent.desc1= scope.notes[indx].desc;
            //     scope.$parent.index=indx;
            //     scope.$parent.bgColor = color;
            // }
            // scope.delete = function(indx){
            //     scope.notes.splice(indx,1);
            // }
        }
    };
}
