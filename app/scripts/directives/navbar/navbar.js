'use strict';

/**
 * @ngdoc directive
 * @name culturalystApp.directive:navbar
 * @description
 * # navbar
 */
angular.module('culturalystApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'scripts/directives/navbar/navbar.html',
    	restrict: 'E',
    	controller: 'NavbarController',
    	controllerAs: 'nav'
    };
  })

  .controller('NavbarController', ['$scope', '$mdSidenav', 'auth1', '$mdDialog',
  function($scope, $mdSidenav, auth1, $mdDialog) {

  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };

  $scope.closeLeftMenu = function(){
    $mdSidenav('left').close();
  }

  $scope.isLoggedIn = function(){
    if(auth1.isLoggedIn()){
      console.log('true');
      return true;
    } else{
      return false;
    }
  }

  $scope.getCurrentUser = function(){
    auth1.getCurrentUser();
    console.log('current user', auth1.getCurrentUser());
  }

  $scope.logout = function(){
    console.log('logging out');
    auth1.logout();
  }

  $scope.getCurrentUser();

  /*
**************************************************
**************************************************
LOGIN & SIGNUP MODAL 
 -- includes function to fire modal
 -- includes controller which controls the modal
  */
  $scope.showLogin_Signup = function() {
    console.log('pressed');
    $mdDialog.show({
      controller: DialogController,
      templateUrl: './views/login_signup.html',
      parent: angular.element(document.body),
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };

//Controller for dialogue, which controls login/signup
  function DialogController($scope, $mdDialog, auth1) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  
  $scope.login = function(){
    auth1.login();
  };

  $scope.email = function(user){
    console.log(user);
    console.log('new');
    auth1.email(user.email,user.password);
  };

  $scope.emailSignin =  function(existingUser){
    console.log(existingUser);
    auth1.emailSignin(existingUser.email,existingUser.password);
  };

  }





// TO ADD TO NAVBAR
  // $scope.menu = [{
  //   'title': 'Test',
  //   'state': 'test'
  // }, 
  // ];

}]);

