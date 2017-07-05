angular.module('sample').controller('loginCtrl',loginCtrl);

function loginCtrl($scope,$http, $location){

    if(localStorage.getItem('token') != null &&  localStorage.getItem('token')!="")
        $location.path('/user');

    $scope.signIn = function(){
        $http.post('http://127.0.0.1:3000/v1/auth/signin',$scope.user).then(function(res){
            localStorage.setItem('token', res.data.data.token);
            localStorage.setItem('userId', res.data.data.user.id);
            $location.path('/user');
        });
    }

    $scope.register = function(){
        $location.path('/register');
    }

}