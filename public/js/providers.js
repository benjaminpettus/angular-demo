var myApp = angular.module('myApp');

myApp.provider('Movies', 
  function () {
    var _endpoint = null; 
    this.setEndpoint = function (endpoint) {
      _endpoint = endpoint;
    };
    this.$get = function ($http) {
     var _this = this;
      return {
        get: function () {
          return $http({method: 'GET', url: _endpoint});
        }
      };
    };
  }
);