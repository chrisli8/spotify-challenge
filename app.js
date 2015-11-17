// Christopher Li, INFO 343, 11/10/15
// The following is the javascript that allows the site to get data from
// spotify and let the user play and pause songs

var data;
var baseUrl = 'https://api.spotify.com/v1/search?type=track&query='
var myApp = angular.module('myApp', [])

//initalizes controller
var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  $scope.artClass = ""

  $scope.audioObject = {}

  //this function checks if the seach term is not empty and then
  //sends a request to Spotify to get the proper data for the site
  $scope.getSongs = function() {
    if($scope.search.length > 0) {
      $http.get(baseUrl + $scope.search).success(function(response){
        data = $scope.tracks = response.tracks.items
      })
    }
  }

  //this function plays or pauses the song that call it
  $scope.play = function(song, $event) {
    if($scope.currentSong == song) {
      $scope.audioObject.pause()
      $scope.currentSong = false
      return
    }
    else {
      if($scope.audioObject.pause != undefined) $scope.audioObject.pause()
      $scope.audioObject = new Audio(song);
      $scope.audioObject.play()  
      $scope.currentSong = song
    }
  }

})

// Add tool tips to anything with a title property
$('body').tooltip({
    selector: '[title]'
});
