angular.module('funapp.jokes', [])
.controller('jokes', function($scope, $http, $rootScope) {

  $scope.fetch = function() {
    $http({
      method: 'GET',
      url: 'http://127.0.0.1:3000/api/jokes'
    })
    .then(function(response) {
      $scope.jokes = response.data;
    });
  }

  $scope.fetch();

  $scope.addJoke = function() {
    $http({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/jokes',
      data: {line: this.submit.line}
    })
    .then(function(response) {
      $scope.fetch();
      this.submit = '';
    })
    // $scope.jokes.push(this.submit);
  }

    $scope.like = function() {
      this.joke.likes++;
    // this.current.likes++;
    // $scope.ratio();
  }

  $scope.dislike = function() {
    this.joke.dislikes++;
    // this.current.dislikes++;
    // $scope.ratio();
  }
});

  // $scope.jokes = [{line: "Why don't some couples go to the gym? Because some relationships don't work out.", by: "Yeezyy", likes: 5, dislikes: 2},
  // {line: "What was Forrest Gump's email password? '1forrest1'", by: "ak-47", likes: 15, dislikes: 1},
  // {line: "If Apple made a car, would it have Windows?", by: "Faker", likes: 13, dislikes: 2},
  // {line: "How does Moses make his tea? Hebrews it.", by: "bob1337", likes: 10, dislikes: 1},
  // {line: "I'd tell you a chemistry joke but I know I wouldn't get a reaction.", by: "Zezima", likes: 8, dislikes: 3},
  // {line: "I always thought air was free, until I bought a bag of chips.", by: "ChipMonster23", likes: 7, dislikes: 2}];