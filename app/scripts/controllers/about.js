'use strict';

/**
 * @ngdoc function
 * @name beginAgainApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the beginAgainApp
 */
angular.module('beginAgainApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
