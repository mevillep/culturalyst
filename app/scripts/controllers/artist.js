'use strict';

/**
 * @ngdoc function
 * @name culturalystApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the culturalystApp
 */
angular.module('culturalystApp')
  .controller('ArtistCtrl',["$scope", "$location", function ($scope, $location) {

  $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.pathArray = $location.path().split('/')
    $scope.artistId = $scope.pathArray.pop();
    $scope.medium = $scope.pathArray[$scope.pathArray.length - 1];
    console.log($scope.pathArray);
    console.log($scope.artistId);
    console.log($scope.medium);
    $scope.selectedArtist;


    	//  firebase.database().ref('Artists/' + $scope.medium + '/' + $scope.artistId).once('value').then(function(snapshot) {
				 //   $scope.selectedArtist = snapshot.val();
				 //   console.log(selectedArtist);
				 //   $scope.apply();
					// });

    	 	  firebase.database().ref('Artists/' + $scope.medium + '/' + $scope.artistId).once('value').then(function(snapshot) {
				   $scope.selectedArtist = snapshot.val();
				   console.log($scope.selectedArtist);
				    $scope.$apply();
					});


    	 
    	 // $scope.$apply();
       $scope.some = 'Artist Controller';


	  //$scope.getArtist();

  
    //  $scope.getArtist = function(){
    // 	 firebase.database().ref('Artists/Music/-KYf6QBaNyB_Y-DtMMaB').once('value').then(function(snapshot) {
				//   var data = snapshot.val()
				// 	console.log(data);
				// 			});
    // }
    
  }]);
