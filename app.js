var fuckApp = angular.module('fuckApp', ['ngRoute', 'ngResource', 'ngAnimate', 'ngAria', 'ngMaterial']);

fuckApp.config(function ($routeProvider) {
  
  $routeProvider
  .when('/', {
    templateUrl: 'html/base.html'
  })
  .when('/home', {
    templateUrl: 'html/home.html',
    controller: 'homeController'
  });
  
});
