var myApp = angular.module('myApp');


myApp.controller('MyController', [
  '$scope', 
  'mainCharacter', 
  function ($scope, mainCharacter) {
  $scope.myFirstName = "Ben";
  $scope.myModel = "Ready Player One!";
  $scope.mainCharacter = mainCharacter;
}]);