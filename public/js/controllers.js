var myApp = angular.module('myApp');


myApp.controller('MyController', ['$scope', function ($scope) {
  $scope.myFirstName = "Ben";
  $scope.myModel = "Ready Player One!";
}]);