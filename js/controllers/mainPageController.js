weatherApp.controller('mainPageController',
  ['$scope','$http','$location',function($scope, $http, $location) {
    // function for input request for city
    $scope.searchCity = function () {   
      var URL = 'https://api.openweathermap.org/data/2.5/find';
      var request = {
        method: 'POST',
        url: URL,
        params: {
          q: $scope.city,
          type: 'like',
          mode: 'json',
          units: 'metric',
          appid: '37e8a116f937408c4043e9d7a993e7c3'
        }
      }
      $http(request)
      .then(function(response) { 
        $scope.cityData = response.data; 
      }).
      catch(function(response) {
        $scope.cityData = response.data;
      });
    }
    // function for city examples 
    $scope.examplesCity = function () {
      var URL = 'https://api.openweathermap.org/data/2.5/find';
      var request = {
        method: 'POST',
        url: URL,
        params: {
          q: $scope.exampleCity,
          type: 'like',
          mode: 'json',
          units: 'metric',
          appid: '37e8a116f937408c4043e9d7a993e7c3'
        }
      }
      $scope.cityArray = [];
      $http(request)
      .then(function(response) { 
        $scope.exampleCityData = response.data;
        $scope.cityArray.push($scope.exampleCityData);
      }).
      catch(function(response) {
        $scope.cityData = response.data;
      });
    }
    var cities = ["Dnipropetrovsk", "Kiev"];
    for (var i = 0; i < cities.length; i++) {
      $scope.exampleCity = cities[i];
      $scope.examplesCity();
    }
}]);

