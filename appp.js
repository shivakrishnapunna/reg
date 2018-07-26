
var app=angular.module("app",[]);



app.controller("ctrl",ctrl);
ctrl.$inject=["$scope","myserv"];
function ctrl($scope,myserv) {
    $scope.createUser=function (user) {
        console.log(user);
        myserv.createUser(user).then(function (res) {
            console.log(res);
        }) ;
    }
}
app.controller('customersCtrl', function($scope, $http) {
    $http.get('/read').then(function (response) {
        console.log(response.data)
        $scope.users = response.data;});
});

app.service('myserv',myserv);
myserv.$inject=["$http"];
function myserv($http) {
    this.createUser=function(user){
        console.log('Serviceuser',user);
        return $http.post("/createuser",user).then(function(res){
            return res;
        })
    }

}

