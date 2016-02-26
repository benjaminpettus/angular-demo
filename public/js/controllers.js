var myApp = angular.module('myApp');


myApp.controller('MyController', [
  '$scope', 
  'mainCharacter',
  'CharacterVersionFactory', 
  'BookService',
  function ($scope, mainCharacter, CharacterVersionFactory, BookService) {
  $scope.myFirstName = "Ben";
  $scope.myModel = "Ready Player One!";
  $scope.mainCharacter = mainCharacter;
  $scope.characterVersion = CharacterVersionFactory;
  $scope.books = BookService.getBooks();
  $scope.BookService = BookService;
}]);