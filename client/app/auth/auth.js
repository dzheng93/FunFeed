angular.module('funapp.auth', [])
.controller('auth', function($scope, $http, $rootScope, $window) {
  $scope.signin = function() {
    console.log($scope);
    $window.location.href= "#jokes";
    $rootScope.rootStatus = '';
    $rootScope.thisUser = $scope.user.name;
  }
})