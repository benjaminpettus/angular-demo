var myApp = angular.module('myApp');

myApp.provider('Movies', 
  function () {
    this.endpoint = null; 
    this.setEndpoint = function (endpoint) {
      this.endpoint = endpoint;
    };
    this.$get = function () {
      //TODO: /fix $http not defined
      // return $http({
      //   method: 'GET',
      //   url: this.setEndpoint
      // })
      // .then(function (response) {
      //   console.log(response); 
      //   return response.data;
      // });
      return [
      { title: 'Harry Potter: Sorcerer\'s Stone'},
      { title: 'Harry Potter: Chamber of Secrets'},
      { title: 'Harry Potter: Prisoner of Azkaban'},
      ];
    };
  }
);