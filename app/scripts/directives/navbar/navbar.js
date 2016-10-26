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

  .controller('NavbarController', ['$scope', '$mdSidenav', 'auth1',
  function($scope, $mdSidenav, auth1) {

  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };

  $scope.closeLeftMenu = function(){
    $mdSidenav('left').close();
  }

  $scope.isLoggedIn = function(){
    if(auth1.isLoggedIn()){
      return true;
    } else{
      return false;
    }
  }

  $scope.getCurrentUser = function(){
    auth1.getCurrentUser();
    console.log('current user', auth1.getCurrentUser());
  }



// TO ADD TO NAVBAR
  // $scope.menu = [{
  //   'title': 'Test',
  //   'state': 'test'
  // }, 
  // ];

}]);

