fuckApp.controller('homeController',
  function ($scope, $mdDialog, $http, baseService) {
    console.log(baseService.loginData);
    $scope.firstName = baseService.loginData.user_first_name;
    console.log($scope);
  });
