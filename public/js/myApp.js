angular.module('myApp', []);

var myApp = angular.module('myApp');



myApp
  .config(function () {

  })
  .run(function () {
    console.log('start');
  });

myApp.controller('MyController', ['$scope', function ($scope) {
  $scope.myFirstName = "Ben";
  $scope.myModel = "Ready Player One!"
}]);