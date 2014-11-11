'use strict';

/**
 * @ngdoc overview
 * @name beginAgainApp
 * @description
 * # beginAgainApp
 *
 * Main module of the application.
 */
angular
    .module('beginAgainApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'angularSmoothscroll'
    ])
    .config(function () {
    })
    .run(function ($rootScope, BA_CONFIG) {
        $rootScope.BA_CONFIG = BA_CONFIG;
    });
