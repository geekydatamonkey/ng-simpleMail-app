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
      controller: 'SettingsController',
      controllerAs: 'settingsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  })
  .controller('HomeController', function() {

  })
  .controller('SettingsController', function() {
    
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@doe.com'
    };

    this.updateSettings = function() {
      console.log('Settings are updating... but not really.');
    };

  });

