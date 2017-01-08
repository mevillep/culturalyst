'use strict';

/**
* @ngdoc function
* @name culturalystApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the culturalystApp
*/
angular.module('culturalystApp')
 .controller('LoginCtrl',["$scope", "auth1", function ($scope, auth1) {

 $scope.login = function(){
   console.log('login ctrl');
   auth1.login();
 };

 $scope.fbLogin = function(){
   console.log('YES');
   auth1.login();
 }

 $scope.email = function(user){
   console.log(user);
   console.log('new');
   auth1.email(user.email,user.password);
 };

 $scope.emailSignin =  function(existingUser){
   console.log('existing');
   console.log(existingUser);
   auth1.emailSignin(existingUser.email,existingUser.password);
 };


 }]);
