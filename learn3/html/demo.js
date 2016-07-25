/**
 * Created by wangyanyan on 2016/7/24.
 */
var app2=angular.module("myApp2",[]);

app2.controller("secondController",function ($scope) {
    $scope.name='王五';
});

app2.controller("thirdController",function ($scope) {
   $scope.name='李四'; 
});