angular.module('funapp.jokes', [])
.controller('jokes', function($scope) {
  $scope.jokes = [{line: "Why don't some couples go to the gym? Because some relationships don't work out.", by: "Yeezyy", likes: 5, dislikes: 2},
  {line: "What was Forrest Gump's email password? '1forrest1'", by: "ak-47", likes: 15, dislikes: 1},
  {line: "If Apple made a car, would it have Windows?", by: "Faker", likes: 13, dislikes: 2},
  {line: "How does Moses make his tea? Hebrews it.", by: "bob1337", likes: 10, dislikes: 1},
  {line: "I'd tell you a chemistry joke but I know I wouldn't get a reaction.", by: "Zezima", likes: 8, dislikes: 3},
  {line: "I always thought air was free, until I bought a bag of chips.", by: "ChipMonster23", likes: 7, dislikes: 2}];

  $scope.addJoke = function() {
    $scope.jokes.push(this.submit);
    this.submit = '';
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