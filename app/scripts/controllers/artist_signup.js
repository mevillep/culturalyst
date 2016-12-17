'use strict';

/**
 * Controller for Artist Signup
 */
angular.module('culturalystApp')
  .controller('ArtistSignupCtrl',['$scope', 'auth1', function ($scope, auth1) {

  	$scope.currentUser = {};
    $scope.selectedMedium;
    $scope.selectedSubmedium = [];
    $scope.artistType;



    $scope.saveArtist = function(){
      var medium = $scope.selectedMedium.name
      var subMedium = $scope.selectedSubmedium
      var user = $scope.currentUser
      console.log(medium)
      firebase.database().ref('Artists/' + medium).push({
        name: user.name,
        name_last: user.name_last,
        birthday: user.dob,
        selectedMedium: medium,
        selectedSubmedium:subMedium,
        hometown: user.hometown,
        hometownState: user.hometown_state,
      });
    };


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


    $scope.mediums = [
      {'name': 'Music', 'submedia': ['Acoustic', 'Afro-caribbean', 'Americana', 'Bounce', 'Brass', 'Blues', 'Bluegrass', 'Brazilian','Burlesque','Cajun','Celtic','Classical','Country','EDM','Folk','Funk','Gospel','Hip-Hop/R&B','Indie','Jazz','Punk','Reggae','Roots','Soul','Zydeco']},
      {'name': 'Visual', 'submedia': ['Photography', 'Painting', 'Sculpture','Graffiti', 'Film', 'Costumes', 'Graphic Design', 'Crafts']},
      {'name': 'Fashion', 'submedia': ['Clothing', 'Accessories', 'Eyewear','Jewelry']},
      {'name': 'Performing', 'submedia': ['Spoken Word', 'Comedy', 'Theater', 'Dance']},
      {'name': 'Written', 'submedia': ['Fiction', 'Non-fiction', 'Poetry', 'Journalism']},
      {'name': 'Culture Bearers', 'submedia': ['Digital', 'Film']},
      {'name': 'Culinary', 'submedia': []},
      {'name': 'Other', 'submedia': []}
    ];

    $scope.types = [
      {'name' : "I'm a professional man"},
      {'name' :"It's my hobby"},
    ];



  }]);


