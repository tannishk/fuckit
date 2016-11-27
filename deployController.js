fuckApp.controller('deployController',function($scope,$mdDialog, $http, baseService, $location, $rootScope){
  $rootScope.url = $rootScope.url ? $rootScope.url : $rootScope.url = ''  ;
  $scope.deployModal = function (event) {
    console.log('modal called');
    $mdDialog.show({
      templateUrl: 'html/deployModal.html',
      targetEvent: event,
      controller: 'deployController',
      clickOutsideToClose: true,
      parent: angular.element(document.body)
    });
  };
  $scope.deploy = function () {
    console.log(localStorage.getItem('sessionId'));
    console.log(document.getElementById('projectName').value);
    console.log(document.getElementById('url').value);
    var val = JSON.stringify({
      "project_name": document.getElementById('projectName').value,
      "github_url": document.getElementById('url').value,
      "language": $scope.request.lan,
      "framework": $scope.request.framework,
      "session_id": localStorage.getItem('sessionId')
    });
    // console.log(document.getElementById('email').value);
    // console.log(document.getElementById('password').value);
    $http.post("http://139.59.19.144/py/polls/request", val)
    .then(function (response) {
      console.log(1);
      console.log(response.data.url);
      $rootScope.url = response.data.url;
      baseService.deployData = response.data;
      $mdDialog.hide();
    });
  };

  $scope.analytics = function(){
    $scope.uio = 'uios';
    $http.get("http://139.59.19.144/py/polls/analytics")
    .then(function (response) {
      console.log(response);
      $scope.summar = response;
      baseService.deployData = response.data;
      $mdDialog.hide();
      $location.path('/analytics');

    });
  };

});
