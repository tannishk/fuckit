fuckApp.controller('deployController',function($scope,$mdDialog, $http, baseService, $location){
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
      console.log(response);
      baseService.deployData = response.data;
      $mdDialog.hide();
      $location.path('/home');
    });
  };

  $scope.analytics = function(){
    $scope.uio = 'uios';
    $http.get("http://139.59.19.144/py/polls/analytics")
    .then(function (response) {
      console.log(response);
      $scope.summar = response;
      $location.path('/analytics');
    });
  };

  var fetchData = function() {
    $http.get("http://139.59.19.144/py/polls/analytics")
    .then(function (response) {
      console.log(response);
      $scope.kinesis = response.data;
    });
  };

  fetchData();


  var chart = function() {
    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    google.charts.setOnLoadCallback(drawChart2);
    function Get(yourUrl){
      // alert('hii');
var Httpreq = new XMLHttpRequest(); // a new request
Httpreq.open("GET",yourUrl,false);
Httpreq.send(null);
return Httpreq.responseText;
}

    function drawChart() {
      var xmlhttp = new XMLHttpRequest();
      var url = "https://api.myjson.com/bins/4wlcf";
      var text = '{ "data12" : [{ "Topping":"John" , "Slices":"2" },{ "Topping":"Anna" , "Slices":"3" }] }';
      // Create the data table.
      var obj = $scope.kinesis;
      console.log(obj.data12[1].ip_address);
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'ip_address');
      data.addColumn('number', 'clicks');
      //var data12 = obj.data12;
      data.addRows(obj.data12.length);
      for(var i=0;i<obj.data12.length;i++)
      {
        //alert(obj.data12[i].Topping);
        data.setCell(i,0,obj.data12[i].ip_address);
        data.setCell(i,1,obj.data12[i].clicks);
  }
      // Set chart options
      var options = {'title':'IP ADDRESS V/S CLICKS',
                     'width':400,
                     'height':300
                 };

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
    function drawChart2()
    {
      var xmlhttp = new XMLHttpRequest();
      var url = "https://api.myjson.com/bins/4wlcf";
      //var text = '{ "data12" : [{ "Topping":"John" , "Slices":"2" },{ "Topping":"Anna" , "Slices":"3" }] }';
      // Create the data table.
      var obj = $scope.kinesis;
      console.log(obj.data13[1].states);
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'states');
      data.addColumn('number', 'clicks');
      //var data12 = obj.data12;
      data.addRows(obj.data13.length);
      for(var i=0;i<obj.data13.length;i++)
      {
        //alert(obj.data12[i].Topping);
        data.setCell(i,0,obj.data13[i].states);
        data.setCell(i,1,obj.data13[i].clicks);
  }
      // Set chart options
      var options = {'title':'States V/S CLICKS',
                     'width':400,
                     'height':300
                 };

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div2'));
      chart.draw(data, options);
    }
  };

  chart();
});
