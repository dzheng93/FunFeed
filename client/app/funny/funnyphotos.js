angular.module('funapp.funnyphotos', [])
.controller('funnyphotos', function($scope, $http) {
  $scope.photos = [];

  $scope.fetch = function() {
    $http({
      method: 'GET',
      url: 'http://127.0.0.1:3000/api/photos'
    })
    .then(function(response) {
      $scope.photos = response.data;
      $scope.current = $scope.photos[0];
    });
  }

  $scope.fetch();

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
    var curr = this.submit.title;
    console.log(curr);
    $http({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/photos',
      data: {title: this.submit.title, url: this.submit.url}
    })
    .then(function(response) {
      $http({
        method: 'GET',
        url: 'http://127.0.0.1:3000/api/photos'
      })
        .then(function(response) {
          $scope.photos = response.data;
          for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].title === curr) {
              $scope.current = response.data[i];
            }
          }
          this.submit = '';
        });
    })
    // console.log(this);
    // $scope.photos.push({title: this.submit.title, url: this.submit.url, likes: 0, dislikes: 0, comments: []});
  }

  $scope.like = function() {
    this.current.likes++;
    // $scope.ratio();
  }

  $scope.dislike = function() {
    this.current.dislikes++;
    // $scope.ratio();
  }

  $scope.addComment = function() {
    var curr = this.current.title;
    $http({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/photos/comments',
      data: {title: this.current.title, comment: this.comment.text}
    })
      .then(function(response) {
        $http({
        method: 'GET',
        url: 'http://127.0.0.1:3000/api/photos'
      })
        .then(function(response) {
          $scope.photos = response.data;
          for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].title === curr) {
              $scope.current = response.data[i];
            }
          }
          $scope.comment.text = '';
        });
      });

  }

});

    // if (this.comment.user === undefined) {
    //   this.comment.user = 'anonymous';
    // }
    // this.current.comments.push(this.comment);

  // $scope.ratio = function() {
  //   $scope.currLikes = ($scope.current.likes / $scope.current.dislikes);
  // }

  // $scope.ratio();

  // $scope.rating = [5, 4, 3, 2, 1];

  // $scope.photos.push({title: 'Query Dawg', url: 'https://s-media-cache-ak0.pinimg.com/736x/14/14/e1/1414e14bd1e51f758566026818b80168.jpg', likes: 10, dislikes: 20, comments: [
  //   {text: 'lol so funny', user: 'anonymous'},
  //   {text: 'lol thats hilarious', user: 'anonymous'},
  //   ]});
  // $scope.photos.push({title: 'Roasted', url: 'http://www.pinhumour.com/wp-content/uploads/1474313821i2480.jpg', likes: 3, dislikes: 2, comments: [
  //   {text: 'lol so funnies', user: 'anonymous'},
  //   {text: 'lol thats too hilarious', user: 'anonymous'},
  //   ]});
  // $scope.photos.push({title: 'President', url: 'https://4.bp.blogspot.com/-cBxHid0d9ok/WCQXho0MI1I/AAAAAAAAVT8/eiBsisiKbpsFT0qYqPB6jtXnrsMOIG2tgCLcB/s1600/what-does-the-president-do.jpg', likes: 5, dislikes: 0});
  // $scope.photos.push({title: 'Mountains Dawg', url: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/1052d318686295.562cdfae68357.JPG', likes: 19, dislikes: 0});