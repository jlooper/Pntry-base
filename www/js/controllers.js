angular.module('pntry.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};
  $scope.registerData = {};
  

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(loginmodal) {
    $scope.loginmodal = loginmodal;
  });

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/register.html', {
    scope: $scope
  }).then(function(registermodal) {
    $scope.registermodal = registermodal;
  });

  //open/close routines
  $scope.openLogin = function() {
    $scope.loginmodal.show();
  };
  $scope.closeLogin = function(){
    $scope.loginmodal.hide();
  };
  $scope.openRegister = function() {
    $scope.registermodal.show();
  };
  $scope.closeRegister = function(){
    $scope.registermodal.hide();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    
  };

  // Perform the register action when the user submits the registration form
  $scope.doRegister = function() {
    
  };
});


