angular.module('culturalystApp')
  .controller('DiscoveryCtrl',['$scope','auth1',function ($scope, auth1) {

// console.log(auth);
	  //ng-models
  $scope.selectedMedium;
  $scope.selectedSubmedium;
  $scope.results;

  	$scope.loadSubMediums = function(medium){
      console.log(medium);
      $scope.submedia = medium.submedia;
    };

    $scope.ifMusic = function(medium){
    console.log('if music is firing'); 	
	    if (medium.name === 'Music'){
	    	$scope.results = $scope.music_results;
	    }else{
	    	$scope.results = [];
	    };
    }

    $scope.currentNavItem = 'Artists';
    $scope.myDate = new Date();


    // $scope.getArtists = function() {
    // 	console.log($scope.selectedMedium);
    //   $http.get('/api/users/discovery/' + $scope.selectedMedium + '/' + $scope.selectedSubmedium).then(function(response) {
    //     $scope.artists = response.data;
    //     console.log(response.data);
    //   })
    // }

  	$scope.mediums = [
			{'name': 'Music', 'submedia': ['Brass', 'Classical', 'Country', 'Experimental', 'Folk', 'Hip-hop', 'Jazz', 'Rock']},
      {'name': 'Writing', 'submedia': ['Fiction', 'Non-Fiction', 'Poetry']},
      {'name': 'Film', 'submedia': ['Documentaries', 'Feature Films', 'Short Films']},
      {'name': 'Visual', 'submedia': ['Acrylics', 'Pastels', 'Watercolor', 'Charcoal', 'Pencil']},
      {'name': 'Photography', 'submedia': ['Digital', 'Film']},
      {'name': 'Dance', 'submedia': ['Ballet', 'Ballroom', 'Hip-hop', 'Lyrical','Theater', 'Plays', 'Musicals']},
      {'name': 'Bearers', 'submedia': ['Mardi Gras Indians']},
      {'name': 'Comedy', 'submedia': ['Dark', 'Upbeat']},
      {'name': 'Crafts', 'submedia': ['Crochet', 'Cross Stitch', 'Knitting', 'Lettering Arts']},
      {'name': 'Design'},
      {'name': 'Code', 'submedia': ['Front-end', 'Back-end', 'Full-stack']},
      {'name': 'Sculpture', 'submedia': ['Clay', 'Metal', 'Wood']},
  ];
  	$scope.mediaList = [
      {'name': 'Music', 'submedia': ['Brass', 'Classical', 'Country', 'Experimental', 'Folk', 'Hip-hop', 'Jazz', 'Rock']},
      {'name': 'Writing', 'submedia': ['Fiction', 'Non-Fiction', 'Poetry']},
      {'name': 'Film', 'submedia': ['Documentaries', 'Feature Films', 'Short Films']},
      {'name': 'Visual', 'submedia': ['Acrylics', 'Pastels', 'Watercolor', 'Charcoal', 'Pencil']},
      {'name': 'Photography', 'submedia': ['Digital', 'Film']},
      {'name': 'Dance', 'submedia': ['Ballet', 'Ballroom', 'Hip-hop', 'Lyrical','Theater', 'Plays', 'Musicals']},
      {'name': 'Bearers', 'submedia': ['Mardi Gras Indians']},
      {'name': 'Comedy', 'submedia': ['Dark', 'Upbeat']},
      {'name': 'Crafts', 'submedia': ['Crochet', 'Cross Stitch', 'Knitting', 'Lettering Arts']},
      {'name': 'Design'},
      {'name': 'Code', 'submedia': ['Front-end', 'Back-end', 'Full-stack']},
      {'name': 'Sculpture', 'submedia': ['Clay', 'Metal', 'Wood']},
    ];

    $scope.ageList = [
      {"age": "age-18"},
      {"age": "age18-24"},
      {"age": "age25-44"},
      {"age": "age45-64"},
      {"age": "age65+"}
    ];

    $scope.orgList = [
      {"org": "true"},
      {"org": "false"}
    ];

    $scope.nativeList = [
      {"natives": "true"},
      {"natives": "false"}
    ];
    $scope.genderList = [
      {"gender": "Female"},
      {"gender": "Male"},
      {"gender": "Transgender"},
      {"gender": "Other"}
    ];

    $scope.expList = [
      {"experience": "Beginner"},
      {"experience": "Intermediate"},
      {"experience": "Professional"},
      {"experience": "Hobbyist"}
    ];


    $scope.music_results = [{"id":1,"first_name":"Ashley","last_name":"Meyer","medium":"Jazz","cover_photo":"http://loremflickr.com/320/240"},
{"id":2,"first_name":"Janice","last_name":"Meyer","medium":"Hip-hop","cover_photo":"https://unsplash.it/200/300/?random"},
{"id":3,"first_name":"Eugene","last_name":"Washington","medium":"Rock","cover_photo":"https://unsplash.it/200/300"},
{"id":4,"first_name":"Evelyn","last_name":"Burns","medium":"Rock","cover_photo":"https://unsplash.it/200/300"},
{"id":5,"first_name":"Edward","last_name":"Fowler","medium":"Jazz","cover_photo":"https://unsplash.it/200/300"},
{"id":6,"first_name":"Aaron","last_name":"Hughes","medium":"Country","cover_photo":"https://unsplash.it/g/200/300"},
{"id":7,"first_name":"Kathryn","last_name":"Turner","medium":"Country","cover_photo":"https://unsplash.it/g/200/300"},
{"id":8,"first_name":"Lillian","last_name":"Hunter","medium":"Classical","cover_photo":"https://unsplash.it/200/300"},
{"id":9,"first_name":"Cynthia","last_name":"Wallace","medium":"Classical","cover_photo":"https://unsplash.it/200/300"},
{"id":10,"first_name":"Kelly","last_name":"Boyd","medium":"Experimental","cover_photo":"https://unsplash.it/200/300"},
{"id":11,"first_name":"Carlos","last_name":"Cooper","medium":"Brass","cover_photo":"https://unsplash.it/200/300/?random"},
{"id":12,"first_name":"Ralph","last_name":"Perkins","medium":"Country","cover_photo":"https://unsplash.it/200/300/?random"},
{"id":13,"first_name":"Jacqueline","last_name":"Romero","medium":"Folk","cover_photo":"https://unsplash.it/g/200/300"},
{"id":14,"first_name":"Gregory","last_name":"Diaz","medium":"Hip-hop","cover_photo":"https://unsplash.it/200/300/?random"},
{"id":15,"first_name":"Jennifer","last_name":"Morrison","medium":"Hip-hop","cover_photo":"https://unsplash.it/200/300"},
{"id":16,"first_name":"William","last_name":"Diaz","medium":"Hip-hop","cover_photo":"https://unsplash.it/200/300/?random"},
{"id":17,"first_name":"Beverly","last_name":"Gonzales","medium":"Classical","cover_photo":"https://unsplash.it/200/300"},
{"id":18,"first_name":"Lori","last_name":"Garza","medium":"Classical","cover_photo":"http://loremflickr.com/320/240"},
{"id":19,"first_name":"Norma","last_name":"Olson","medium":"Hip-hop","cover_photo":"https://unsplash.it/g/200/300"},
{"id":20,"first_name":"Frances","last_name":"Harper","medium":"Rock","cover_photo":"http://loremflickr.com/320/240"},
{"id":21,"first_name":"Antonio","last_name":"Pierce","medium":"Experimental","cover_photo":"https://unsplash.it/g/200/300"},
{"id":22,"first_name":"Nicholas","last_name":"Hamilton","medium":"Jazz","cover_photo":"https://unsplash.it/g/200/300"},
{"id":23,"first_name":"James","last_name":"Kelley","medium":"Country","cover_photo":"http://loremflickr.com/320/240"},
{"id":24,"first_name":"Susan","last_name":"Gonzales","medium":"Jazz","cover_photo":"http://loremflickr.com/320/240"},
{"id":25,"first_name":"Heather","last_name":"Harris","medium":"Folk","cover_photo":"https://unsplash.it/200/300"},
{"id":26,"first_name":"Aaron","last_name":"Ortiz","medium":"Hip-hop","cover_photo":"https://unsplash.it/200/300"},
{"id":27,"first_name":"Jennifer","last_name":"Bishop","medium":"Folk","cover_photo":"https://unsplash.it/g/200/300"},
{"id":28,"first_name":"Terry","last_name":"Scott","medium":"Rock","cover_photo":"https://unsplash.it/g/200/300"},
{"id":29,"first_name":"Paul","last_name":"Lawrence","medium":"Brass","cover_photo":"https://unsplash.it/200/300"},
{"id":30,"first_name":"Jason","last_name":"Marshall","medium":"Experimental","cover_photo":"https://unsplash.it/200/300/?random"},
{"id":31,"first_name":"Juan","last_name":"Oliver","medium":"Experimental","cover_photo":"https://unsplash.it/200/300/?random"},
{"id":32,"first_name":"Heather","last_name":"Campbell","medium":"Experimental","cover_photo":"https://unsplash.it/200/300/?random"},
{"id":33,"first_name":"Carl","last_name":"Hawkins","medium":"Rock","cover_photo":"http://loremflickr.com/320/240"},
{"id":34,"first_name":"Juan","last_name":"Cole","medium":"Experimental","cover_photo":"http://loremflickr.com/320/240"},
{"id":35,"first_name":"Victor","last_name":"Spencer","medium":"Rock","cover_photo":"https://unsplash.it/g/200/300"},
{"id":36,"first_name":"Jimmy","last_name":"Griffin","medium":"Hip-hop","cover_photo":"https://unsplash.it/g/200/300"},
{"id":37,"first_name":"Dorothy","last_name":"Perry","medium":"Country","cover_photo":"https://unsplash.it/g/200/300"}
];

$scope.mySound = soundManager.createSound({
  url: 'http://www.stephaniequinn.com/Music/Jazz%20Rag%20Ensemble%20-%2010.mp3'
});


$scope.play = function(){
	$scope.mySound.play();
}

$scope.selectionMade = function(){
	if ($scope.selectedMedium != undefined){
		return true
	} else{
		return false
	}
}

  }]);
