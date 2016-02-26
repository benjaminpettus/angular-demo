angular.module('myApp', []);

var myApp = angular.module('myApp');



myApp
  .config(function (MoviesProvider) {
    //set up configuration
    MoviesProvider.setEndpoint('/api');
  })
  .run([
    '$rootScope',
    'APP_VERSION',
    function ($rootScope, APP_VERSION) {
    //start application 
    $rootScope.version = APP_VERSION;
  }]);

