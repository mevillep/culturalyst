'use strict';

/**
 * @ngdoc function
 * @name culturalystApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the culturalystApp
 */
angular.module('culturalystApp')
  .controller('MainCtrl',['$scope','auth1',function ($scope,auth1) {

// console.log(auth);
  $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  //
  //     $scope.isLoggedIn = function(){
  //   return auth1.isLoggedIn();
  // }

  $scope.login = function(){
    auth1.login();
  }
    $scope.some = 'some string';
  }]);
