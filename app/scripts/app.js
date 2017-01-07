'use strict';

/**
 * @ngdoc overview
 * @name culturalystApp
 * @description
 * # culturalystApp
 *
 * Main module of the application.
 */

  angular
    .module('culturalystApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngMaterial'
    ])
    .config(function ($routeProvider, $mdIconProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      // .when('/artist', {
      //   templateUrl: 'views/artist.html',
      //   controller: 'ArtistCtrl',
      //   controllerAs: 'artist'
      // })
      .when('/artist_signup', {
        templateUrl: 'views/artist_signup.html',
        controller: 'ArtistSignupCtrl',
        controllerAs: 'artist_signup'
      })
      .when('/discovery', {
        templateUrl: 'views/discovery.html',
        controller: 'DiscoveryCtrl',
        controllerAs: 'discovery'
      })
      .when('/discovery_B', {
        templateUrl: 'views/discovery_B.html',
        controller: 'DiscoveryCtrl_B',
        controllerAs: 'discovery_B'
      })
      .when('/artist_work', {
        templateUrl: 'views/artist_work.html',
        controller: 'DiscoveryCtrl_B',
        controllerAs: 'discovery_B'
      })
      .when('/artist_bio', {
        templateUrl: 'views/artist_bio.html',
        controller: 'DiscoveryCtrl_B',
        controllerAs: 'discovery_B'
      })
      .when('/artist/:medium/:id', {
        templateUrl: 'views/artist.html',
        controller: 'ArtistCtrl',
        controllerAs: 'artist'
      })
      .otherwise({
        redirectTo: '/'
      })

      $mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 128)
      .icon("menu" , "./assets/svg/menu.svg", 24)
      .icon("menu_black" , "./assets/svg/menu_black.svg", 24)
      .icon("search" , "./assets/svg/search.svg", 24)
      .icon("search_black", "./assets/svg/search_black.svg", 24)
      .icon("back_arrow", "./assets/svg/back_arrow.svg", 24)
      .icon("clear_black", "./assets/svg/clear_black.svg", 24)
      .icon("enter_black", "./assets/svg/enter_black.svg", 24)
      .icon("discover_black", "./assets/svg/discover_black.svg", 24)
      .icon("home_black", "./assets/svg/home_black.svg", 24)
      .icon("dollar_black", "./assets/svg/dollar_black.svg", 24)
      .icon("dollar_white", "./assets/svg/dollar_white.svg", 24)
      .icon("thumb_black", "./assets/svg/thumb_black.svg", 24)
      .icon("add_black", "./assets/svg/add_black.svg", 24)
      .icon("help_black", "./assets/svg/help_black.svg", 24)
      .icon("linkedin", "./assets/svg/linkedin.svg", 24)
      .icon("etsy", "./assets/svg/etsy.svg", 24)
      .icon("spotify", "./assets/svg/spotify.svg", 24)
      .icon("twitter", "./assets/svg/twitter.svg", 24)
      .icon("behance", "./assets/svg/behance.svg", 24)
      .icon("facebook", "./assets/svg/facebook.svg", 24)
      .icon("instagram", "./assets/svg/instagram.svg", 24)
      .icon("soundcloud", "./assets/svg/soundcloud.svg", 24)
      .icon("play_black", "./assets/svg/play_black.svg", 24)
      .icon("playArrow_black", "./assets/svg/playArrow_black.svg", 24)

        // $locationProvider.html5Mode(true);
  });
