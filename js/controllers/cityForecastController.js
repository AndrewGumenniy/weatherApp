weatherApp.controller('cityForecastController',
  ['$scope','$http','$routeParams', function ($scope,$http,$routeParams) {
    $scope.item = $routeParams.itemId;
    // forecast request for id for current data
    var URL = 'https://api.openweathermap.org/data/2.5/weather';
    var request = {
      method: 'POST',
      url: URL,
      params: {
        id: $scope.item,
        mode: 'json',
        units: 'metric',
        appid: '37e8a116f937408c4043e9d7a993e7c3'
      }
    }
    $http(request)
    .then(function(response) { 
      $scope.currentCityData = response.data;
    }).
    catch(function(response) {
      $scope.currentCityData = response.data;
    });
    // forecast request for id for 5 days forecast
    var URL = 'https://api.openweathermap.org/data/2.5/forecast';
    var request = {
      method: 'POST',
      url: URL,
      params: {
        id: $scope.item,
        mode: 'json',
        units: 'metric',
        appid: '37e8a116f937408c4043e9d7a993e7c3'
      }
    }
    $http(request)
    .then(function(response) { 
      $scope.cityForecast = response.data; 
    }).
    catch(function(response) {
      $scope.cityForecast = response.data;
    });
    // today data and time
    $scope.today = new Date();
    // tabs handler
    $scope.tab = 1;
    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };
    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };
}]);  
