'use strict';

/**
 * @ngdoc function
 * @name bcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bcApp
 */
angular.module('bcApp')
  .controller('MainCtrl', function ($scope,$mdSidenav) {
    $scope.openLeftMenu = function() {
      $mdSidenav('left').toggle();
    };
  });
