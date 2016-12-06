angular.module('funapp.jokes', [])
.controller('jokes', function($scope) {
  $scope.jokes = [{line: "Why don't some couples go to the gym? Because some relationships don't work out.", by: "Yeezyy"},
  {line: "What was Forrest Gump's email password? '1forrest1'", by: "ak-47"},
  {line: "If Apple made a car, would it have Windows?", by: "Faker"},
  {line: "How does Moses make his tea? Hebrews it.", by: "bob1337"},
  {line: "I'd tell you a chemistry joke but I know I wouldn't get a reaction.", by: "Zezima"},
  {line: "I always thought air was free, until I bought a bag of chips.", by: "ChipMonster23"}];

  $scope.addJoke = function() {
    $scope.jokes.push(this.submit);
    this.submit = '';
  }
});