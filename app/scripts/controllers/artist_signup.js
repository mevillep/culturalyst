'use strict';

/**
 * @ngdoc function
 * @name culturalystApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the culturalystApp
 */
angular.module('culturalystApp')
  .controller('ArtistSignupCtrl',['$scope', 'auth1', function ($scope, auth1) {

  	$scope.currentUser = {};


  	// $scope.currentUser.userId = firebase.auth().currentUser.uid;
  	// console.log('logging current user:' + $scope.userId);

   $scope.saveMedium = function(){
   	console.log('Saving Medium');
    firebase.database().ref('Mediums/').set({
      Music: {}
    });
  };

  $scope.saveArtistToMedium = function(artistId){
  	  firebase.database().ref('Mediums/Music').push({
      name: medium,
      Jazz:{}
    });
  }


  $scope.saveArtist = function(name, medium, imageUrl){
    firebase.database().ref('Artists/Music').push({
      name: name,
      medium:medium,
      neigbhorhood: imageUrl
    });
  };

  $scope.getArtists = function(){
  	firebase.database().ref('/Artists/Music').once('value').then(function(snapshot){
  		console.log(snapshot.val());
  	})
  }

  $scope.saveMedium();


// return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//   var username = snapshot.val().username;
//   // ...
// });


  // $scope.saveArtist('Sam', 'Jazz', 'www.google.com');
  $scope.getArtists();


  $scope.saveBasics = function(name, name_last, dob){
  	console.log($scope.currentUser);
  	firebase.database().ref('Mediums/Music').push({
      name: $scope.currentUser.name,
      name_last: $scope.currentUser.name_last
    });

     firebase.database().ref('Artists/Music/Jazz').push({
      name: $scope.currentUser.name,
      name_last: $scope.currentUser.name_last
    });
  };


  }]);


