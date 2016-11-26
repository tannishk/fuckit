var fuckApp = angular.module('fuckApp', ['ngRoute', 'ngResource', 'ngAnimate', 'ngAria', 'ngMaterial']);

fuckApp.controller('loginController',
  function ($scope, $mdDialog) {
    $scope.loginModal = function (event) {
      console.log('modal called');
      $mdDialog.show({
        templateUrl: 'html/loginModal.html',
        targetEvent: event,
        controller: 'loginController',
        clickOutsideToClose: true,
        parent:angular.element(document.body)
      })
    }
  });