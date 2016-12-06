angular.module('funapp.funnyphotos', [])
.controller('funnyphotos', function($scope) {
  $scope.photos = [];
  $scope.rating = [5, 4, 3, 2, 1];

  $scope.photos.push({title: 'Query Dawg', url: 'https://s-media-cache-ak0.pinimg.com/736x/14/14/e1/1414e14bd1e51f758566026818b80168.jpg', like: 0, dislike: 0, comments: [
    {text: 'lol so funny', user: 'anonymous'},
    {text: 'lol thats hilarious', user: 'anonymous'},
    ]});
  $scope.photos.push({title: 'Roasted', url: 'http://www.pinhumour.com/wp-content/uploads/1474313821i2480.jpg', like: 0, dislike: 2, comments: [
    {text: 'lol so funnies', user: 'anonymous'},
    {text: 'lol thats too hilarious', user: 'anonymous'},
    ]});
  $scope.photos.push({title: 'President', url: 'https://4.bp.blogspot.com/-cBxHid0d9ok/WCQXho0MI1I/AAAAAAAAVT8/eiBsisiKbpsFT0qYqPB6jtXnrsMOIG2tgCLcB/s1600/what-does-the-president-do.jpg', like: 0, dislike: 0});
  $scope.photos.push({title: 'Mountains Dawg', url: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/1052d318686295.562cdfae68357.JPG', like: 0, dislike: 0});

  $scope.current = $scope.photos[0];

  $scope.click = function() {
    console.log(this);
    $scope.current = this.pic;
  }

  $scope.select = function() {
    console.log(this);
    $scope.current = this.selectedPicture;
  }

  $scope.rater = function(currRate) {
    $scope.current.rating = currRate;
  }

  $scope.addPhoto = function() {
    console.log(this);
    $scope.photos.push({title: this.submit.title, url: this.submit.url, rating: 'None'});
  }

});