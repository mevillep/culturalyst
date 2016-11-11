
  'use strict';

/**
 * @ngdoc service
 * @name culturalystApp.auth1
 * @description
 * # auth1
 * Factory in the culturalystApp.
 */
angular.module('culturalystApp')
  .factory('auth1', function ($rootScope, $mdDialog) {


    //
    // function AuthService($location, $http, $cookies, $q, appConfig, Util, User) {
    //   var safeCb = Util.safeCb;
    //   var currentUser = {};
    //   var userRoles = appConfig.userRoles || [];
      var userObj = {}
    //   if ($cookies.get('token') && $location.path() !== '/logout') {
    //     currentUser = User.get();
    //   }
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
    $mdDialog.cancel();
  },

  fbLogin(){
      var provider = new firebase.auth.FacebookAuthProvider();
      // provider.addScope('user_birthday');
      // provider.addScope('user_events');
      // provider.addScope('user_friends');
      console.log(provider);

      firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // Save the users basic information to the database
      Auth.saveUser(user.uid, user.displayName, user.email,user.photoURL);

    }).catch(function(error) {
      // Handle Errors here.
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  },
emailSignup(email,password){

  console.log('in sign up');
console.log(email);
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  console.log(errorCode);
  var errorMessage = error.message;
    console.log(errorMessage);
  // ...
});
  $mdDialog.cancel();
},
emailSignin(email,password){

  console.log('existing user2');
  firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
  console.log(result);

    $rootScope.signed = result;

  console.log($rootScope.signed);
  $mdDialog.cancel();
}).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    console.log(errorCode);
    var errorMessage = error.message;
      console.log(errorMessage);

  });
  //get signed in user

      // var user = firebase.auth().currentUser;
      // if (user) {
      //   console.log(user);
      // } else {
      //   console.log('user not found');
      // }

},

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


  /**
   * Change password
   *
   * @param  {String}   oldPassword
   * @param  {String}   newPassword
   * @param  {Function} callback    - optional, function(error, user)
   * @return {Promise}
   */
  changePassword(oldPassword, newPassword, callback) {
    return User.changePassword({ id: currentUser._id }, {
      oldPassword: oldPassword,
      newPassword: newPassword
    }, function() {
      return safeCb(callback)(null);
    }, function(err) {
      return safeCb(callback)(err);
    }).$promise;
  },

  /**
   * Gets all available info on a user
   *   (synchronous|asynchronous)
   *
   * @param  {Function|*} callback - optional, funciton(user)
   * @return {Object|Promise}
   */
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

    })
    return userObj;
  },
   /**
    * Check if a user has a specified role or higher
    *   (synchronous|asynchronous)
    *
    * @param  {String}     role     - the role to check against
    * @param  {Function|*} callback - optional, function(has)
    * @return {Bool|Promise}
    */
  hasRole(role, callback) {
    var hasRole = function(r, h) {
      return userRoles.indexOf(r) >= userRoles.indexOf(h);
    };

    if (arguments.length < 2) {
      return hasRole(currentUser.role, role);
    }

    return Auth.getCurrentUser(null)
      .then(user => {
        var has = (user.hasOwnProperty('role')) ?
          hasRole(user.role, role) : false;
        safeCb(callback)(has);
        return has;
      });
  },

   /**
    * Check if a user is an admin
    *   (synchronous|asynchronous)
    *
    * @param  {Function|*} callback - optional, function(is)
    * @return {Bool|Promise}
    */
  isAdmin() {
    return Auth.hasRole
      .apply(Auth, [].concat.apply(['admin'], arguments));
  },

  isArtist() {
    return Auth.hasRole
      .apply(Auth, [].concat.apply(['artist'], arguments));
  },

  /**
   * Get auth token
   *
   * @return {String} - a token string used for authenticating
   */
  getToken() {
    return $cookies.get('token');
  }
};
// return auth1;
// }
//

    // Public API here
    return {
       login : function(){
         Auth.fbLogin()
       },
       email : function(email,password){

         Auth.emailSignup(email,password)
       },
       emailSignin : function(email,password){

         Auth.emailSignin(email,password)
       },
       isLoggedIn : function(){
        Auth.isLoggedIn();
       },
       getCurrentUser : function() {
        Auth.getCurrentUser();
       },
       logout : function(){
        Auth.logout();
       }

    };
  });
