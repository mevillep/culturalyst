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
    $scope.selectedMedium;
    $scope.selectedSubmedium;


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

      $scope.loadSubMediums = function(medium){
      console.log(medium);
      $scope.submedia = medium.submedia;
    };

    $scope.selectionMade = function(){
      console.log('in this bish')
      if ($scope.results != undefined){
        return true
      } else{
        return false
      }
    };


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

    $scope.mediums = [
      {'name': 'Music', 'submedia': ['Acoustic', 'Afro-caribbean', 'Americana', 'Bounce', 'Brass', 'Blues', 'Bluegrass', 'Brazilian','Burlesque','Cajun','Celtic','Classical','Country','EDM','Folk','Funk','Gospel','Hip-Hop/R&B','Indie','Jazz','Punk','Reggae','Roots','Soul','Zydeco']},
      {'name': 'Visual', 'submedia': ['Photography', 'Painting', 'Sculpture','Graffiti', 'Film', 'Costumes', 'Graphic Design']},
      {'name': 'Performing', 'submedia': ['Spoken Word', 'Comedy', 'Acting', 'Dance']},
      {'name': 'Writing', 'submedia': ['Fiction', 'Non-fiction', 'Poetry', 'Journalism']},
      {'name': 'Culture Bearers', 'submedia': ['Digital', 'Film']},
      {'name': 'Culinary', 'submedia': []}
    ];



  }]);


