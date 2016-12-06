angular.module('funapp.randomcats', [])
.controller('randomcats', function($scope, $http, $window) {

  $scope.photos = [];

  $scope.refresh = function() {
    $http({
      method: 'GET',
      url: 'http://thecatapi.com/api/images/get?format=html&results_per_page=30&size=small'
    })
    .then(function(resp) {
      console.log(resp.data);
      $scope.photos = resp.data;
    });
  }

  $scope.refresh();

  $scope.backup = function() {
    $window.scrollTo(0, 0);
  }

});