'use strict';

/**
 * @ngdoc function
 * @name bcApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the bcApp
 */
angular.module('bcApp')
  .controller('NewsCtrl', function ($scope,Content) {
      Content.getContent(function(result){
        $scope.stories = result.list ;
      })
  });
