'use strict';

/**
 * @ngdoc function
 * @name beginAgainApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the beginAgainApp
 */
angular.module('beginAgainApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
