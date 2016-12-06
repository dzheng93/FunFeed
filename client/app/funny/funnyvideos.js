angular.module('funapp.funnyvideos', [])
.filter('youtubeEmbedUrl', function ($sce) {
    return function(videoId) {
      return $sce.trustAsResourceUrl('http://www.youtube.com/embed/' + videoId);
    };
  })
.controller('funnyvideos', function($scope, $http) {
  $scope.videos = [];
  $scope.rating = [5, 4, 3, 2, 1];

  var APIKEY = "AIzaSyCTIECdH8FLCN0pmhZIDIoNDHb0S9O02ds";
  $scope.main = "https://www.youtube.com/embed/"

  var fetch = function(query, sort) {
    $http.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      key: APIKEY,
      type: 'video',
      maxResults: '10',
      part: 'id,snippet',
      videoEmbedable: 'true',
      q: query,
      order: sort,
      safeSearch: 'strict'
    }
  })
  .success(function (data) {
    console.log(data.items);
    $scope.videos = data.items;
  });
  }

  $scope.current = 'funny pranks';
  $scope.sorting = 'viewCount';

  $scope.viewCount = function() {
    $scope.sorting = 'viewCount';
  fetch($scope.current, $scope.sorting);
  }

  $scope.highestRated = function() {
    $scope.sorting = 'rating';
    fetch($scope.current, $scope.sorting);
  }

  $scope.newest = function() {
    $scope.sorting = 'date';
    fetch($scope.current, $scope.sorting);
  }

  $scope.updateSearch = function(query) {
    $scope.current = query;
    fetch($scope.current, $scope.sorting);
  }

  $scope.getIframeSrc = function (videoId) {
  return 'https://www.youtube.com/embed/' + videoId;
};

  $scope.viewCount();
});