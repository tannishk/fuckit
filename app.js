var fuckApp = angular.module('fuckApp', ['ngRoute', 'ngResource', 'ngAnimate', 'ngAria', 'ngMaterial']);

fuckApp.controller('loginController',
  function ($scope, $mdDialog, $http) {
    $scope.loginModal = function (event) {
      console.log('modal called');
      $mdDialog.show({
        templateUrl: 'html/loginModal.html',
        targetEvent: event,
        controller: 'loginController',
        clickOutsideToClose: true,
        parent: angular.element(document.body)
      });
    };
    $scope.signupModal = function (event) {
      console.log('modal called');
      $mdDialog.show({
        templateUrl: 'html/signupModal.html',
        targetEvent: event,
        controller: 'loginController',
        clickOutsideToClose: true,
        parent: angular.element(document.body)
      });
    };
    $scope.login = function () {
      console.log(23);
      var val = JSON.stringify({
        "email": document.getElementById('email').value,
        "password": document.getElementById('password').value
      });
      console.log(document.getElementById('email').value);
      console.log(document.getElementById('password').value);
      $http.post("http://139.59.19.144/py/polls/login", val)
      .then(function (response) {
        console.log(response);
      });
    };
  });

fuckApp.config(function ($routeProvider) {
  
  $routeProvider
  .when('/', {
    templateUrl: 'html/base.html'
  })
  .when('/home', {
    templateUrl: 'html/home.html',
    controller: ''
  });
  
});
