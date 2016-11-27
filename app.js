var fuckApp = angular.module('fuckApp', ['ngRoute', 'ngResource', 'ngAnimate', 'ngAria', 'ngMaterial']);

fuckApp.config(function ($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'html/base.html'
  })
  .when('/home', {
    templateUrl: 'html/temp.html',
    controller: 'homeController'
  })
  .when('/analytics', {
    templateUrl: 'html/charts.html',
    controller: 'deployController'
  });

});
