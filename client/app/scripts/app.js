'use strict';

angular.module('simpleMail', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html',
      controller: 'HomeController'
    })
    .when('/settings', {
      templateUrl: 'templates/settings.html',
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

