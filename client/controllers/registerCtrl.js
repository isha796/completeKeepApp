angular.module('sample').controller('registerCtrl', registerCtrl);

function registerCtrl($scope, $http, $location){

    if(localStorage.getItem('token') != null && localStorage.getItem('token') !="")
        $location.path('/user');

    $scope.signup = function(){
        $http.post('http://127.0.0.1:3000/v1/auth/signup',$scope.user).then(function(res){
            localStorage.setItem('token',res.data.data.token);
            localStorage.setItem('userId', res.data.data.user.id);
            $location.path('/user');
        })
    }
}