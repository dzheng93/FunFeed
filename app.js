angular.module('funapp', [
  'ngRoute',
  // 'funApp.index',
  'funapp.jokes',
  'funapp.funnyphotos',
  'funapp.randomcats',
  'funapp.funnyvideos',
  // 'funapp.signin',
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
      });
      // .otherwise({
      //   redirectTo: '/index'
      // })
})
  .service('test', function() {

  })
