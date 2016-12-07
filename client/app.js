angular.module('funapp', [
  'ngRoute',
  // 'funApp.index',
  'funapp.jokes',
  'funapp.funnyphotos',
  'funapp.randomcats',
  'funapp.funnyvideos',
  'funapp.auth',
  // 'funapp.signout',
  'ngSanitize'
  ])
  .config(function($routeProvider) {
    $routeProvider
      // .when('/home', {
      //   templateUrl: 'public/index.html'
      //   controller: 'index'
      // })
      .when('/jokes', {
        templateUrl: 'app/jokes/jokes.html',
        controller: 'jokes'
      })
      .when('/funnyphotos', {
        templateUrl: 'app/funny/funnyphotos.html',
        controller: 'funnyphotos'
      })
      .when('/randomcats', {
        templateUrl: 'app/cats/randomcats.html',
        controller: 'randomcats'
      })
      .when('/funnyvideos', {
        templateUrl: 'app/funny/funnyvideos.html',
        controller: 'funnyvideos'
      })
      .when('/signin', {
        templateUrl: 'app/auth/signin.html',
        controller: 'auth'
      })
      .when('/signup', {
        templateUrl: 'app/auth/signup.html',
        controller: 'auth'
      })
      // .otherwise({
      //   redirectTo: '/index'
      // })
})
  .service('test', function() {

  })
  .controller('nav', function($scope, $rootScope) {

    $rootScope.rootStatus = 'SIGN IN';

  })