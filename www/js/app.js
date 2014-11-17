// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

  //list of all donation requests to date
   .state('app.donationrequests', {
      url: "/donationrequests",
      views: {
        'menuContent' :{
          templateUrl: "templates/donationrequests.html",
          controller: 'DonationCtrl'
        }
      }
    })
   //a single donation request. check off what was donated, it will be added to inventory
    .state('app.singledonation', {
      url: "/donationrequests/:Id",
      views: {
        'menuContent' :{
          templateUrl: "templates/donationrequestdetail.html",
          controller: 'DonationCtrl'
        }
      }
    })
    //form to request a donation
    .state('app.requestdonation', {
      url: "/requestdonation",
      views: {
        'menuContent' :{
          templateUrl: "templates/requestdonation.html",
          controller: 'RequestCtrl'
        }
      }
    })
    //everything currently in the pantry
    .state('app.inventory', {
      url: "/inventory",
      views: {
        'menuContent' :{
          templateUrl: "templates/inventory.html",
          controller: 'InventoryCtrl'
        }
      }
    })
    //everything we have requested. Check off something from here to remove it from this list and add to inventory
    .state('app.needs', {
      url: "/needs",
      views: {
        'menuContent' :{
          templateUrl: "templates/needs.html",
          controller: 'NeedsCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/donationrequests');
});

