'use strict';

/**
 * @ngdoc service
 * @name culturalystApp.auth1
 * @description
 * # auth1
 * Factory in the culturalystApp.
 */
angular.module('culturalystApp')
  .factory('auth1', function () {
    var userObj = {}
    var Auth = {

      test(){
        console.log('in test');
      },
  /**
   * Save user to database.
   */

  saveUser(userId, name, email, imageUrl){
    firebase.database().ref('Users/' + userId).set({
      username: name,
      email: email,
      profile_picture: imageUrl
    });
  },


  getResult(){
      firebase.auth().getRedirectResult().then(function(result) {
        console.log('in here');
          if (result.credential) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // ...
          }
          // The signed-in user info.
          var user = result.user;
          console.log(user);
          Auth.saveUser(user.uid, user.displayName, user.email,user.photoURL);
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      },

  fbLogin(){
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(provider);
  },

  // fbLogin(){
  //     var provider = new firebase.auth.FacebookAuthProvider();
  //     // provider.addScope('user_birthday');
  //     // provider.addScope('user_events');
  //     // provider.addScope('user_friends');
  //     console.log(provider);

  //     firebase.auth().signInWithPopup(provider).then(function(result) {
  //     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  //     var token = result.credential.accessToken;
  //     // The signed-in user info.
  //     var user = result.user;
  //     console.log(user);
  //     // Save the users basic information to the database
  //     Auth.saveUser(user.uid, user.displayName, user.email,user.photoURL);

  //   }).catch(function(error) {
  //     // Handle Errors here.
  //     console.log(error);
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     // The email of the user's account used.
  //     var email = error.email;
  //     // The firebase.auth.AuthCredential type that was used.
  //     var credential = error.credential;
  //     // ...
  //   });
  // },



  /**
   * Delete access token and user info
   */
  logout() {
    firebase.auth().signOut().then(function() {
      console.log('logging out');
    }, function(error) {
    // An error happened.
    });
  },




 
  getCurrentUser(callback) {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
      } else {
        console.log('No User Signed in');
      }
    });
  },

  /**
   * Check if a user is logged in
   *   (synchronous|asynchronous)
   *
   * @param  {Function|*} callback - optional, function(is)
   * @return {Bool|Promise}urn
   */
  isLoggedIn() {

    firebase.auth().onAuthStateChanged(function(user){
     userObj = user;

    });
    return userObj;
  }

};
// return auth1;
// }
//

    // Public API here
    return {
       login : function(){
         Auth.fbLogin();
       },
       isLoggedIn : function(){
        Auth.isLoggedIn();
       },
       getCurrentUser : function() {
        getCurrentUser();
       }
    };
  });
