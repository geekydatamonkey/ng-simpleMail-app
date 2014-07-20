'use strict';

angular.module('simpleMail', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    .when('/settings', {
      templateUrl: 'partials/settings.html',
      controller: 'SettingsController'
    })
    .otherwise({
      redirectTo: '/'
    });
  })
  .controller('HomeController', function(){

  })
  .controller('SettingsController', function(){

  });

