'use strict';

/**
 * @ngdoc overview
 * @name bcApp
 * @description
 * # bcApp
 *
 * Main module of the application.
 */

angular
  .module('bcApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ngCordova',
    'ui.router',
    'ngStorage',
    'masonry'

  ]).config(function ($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/home/news');
    $stateProvider

      .state('home', {
        url: '/home',
        template: '<ui-view />',
        abstract : true
      })

      // nested list with custom controller
      .state('home.news', {
        url: '/news',
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl'
      })
      .state('home.about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'NewsCtrl'
      })
      .state('home.news.detail', {
        url: '/news/:id',
        templateUrl: 'views/news-detail.html',
        controller: 'NewsCtrl'
      })
  }).config(function($mdThemingProvider) {

    $mdThemingProvider.theme('default')
      .primaryPalette('blue', {
        'default': '400', // by default use shade 400 from the pink palette for primary intentions
        'hue-1': '50', // use shade 100 for the <code>md-hue-1</code> class
        'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
        'hue-3': 'A100', // use shade A100 for the <code>md-hue-3</code> class
      })
      // If you specify less than all of the keys, it will inherit from the
      // default shades
      .accentPalette('purple', {
        'default': '200' // use shade 200 for default, and keep all other shades the same
      });
  }).config(function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
  }).config(function($mdIconProvider) {
    // Configure URLs for icons specified by [set:]id.
    $mdIconProvider
      .icon('alarm', 'images/svg/wifi9.svg')    // Register a specific icon (by name)
  });;
