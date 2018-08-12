angular.module('instajoe',['ngCookies']);

function registerController ($window,$http,$cookies,$scope){
    this.click = function(event){
        $http.post('http://localhost:8000/register',{email:$scope.email,password:$scope.password,username: $scope.username,fullName:$scope.fullName}).then(function(res){
            if (res.data.status == 'success'){
                $window.location.href = 'http://localhost:8008/feed';
            }
            else{

            }
        });
    }
}

angular.module('instajoe').controller('registerController',['$window','$http','$cookies','$scope',registerController]);
