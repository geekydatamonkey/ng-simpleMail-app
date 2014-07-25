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

  })
  .controller('MailboxController', function(){

    // Test Data. Make a Factory?
    var emails = [ {
        id : 1,
        from : 'test@test.com',
        to : 'example@example.com',
        subject : 'This is a subject',
        body : 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor.'
      },
      {
        id : 2,
        from : 'bob@bob.com',
        to : 'example@example.com',
        subject : 'This is another subject',
        body : 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
      }
];


    this.mailList = emails;
    this.activeMailID = 1;

    this.isActive = function(id) {
      return (id === this.activeMailID);
    };

    this.setActive = function(id) {
      this.activeMailID = id;
      console.log(this.activeMailID);
    };
  })
  .controller('MailListingController', function() {
    this.test = '123';


  })
  .controller('MailContentController', function() {
    

  });

