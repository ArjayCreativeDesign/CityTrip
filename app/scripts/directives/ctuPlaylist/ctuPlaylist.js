/**
 * Created by RobertMesschendorp on 09/11/16.
 */
(function () {
    cityTripApp.directive('ctuPlaylist', function (Spotify, databaseService, Page) {
        return {
            restrict: 'E',
            replace : true,
            scope   : {},
            templateUrl: 'app/scripts/directives/ctuPlaylist/ctuPlaylist.html',
            css: 'app/scripts/directives/ctuPlaylist/ctuPlaylist.css',
            link: function () {

            },
            controller: function ($scope, $rootScope,$location, $window, Spotify) {
                Page.setTitle("Playlists");

                $scope.gotPlaylists = true;
                $scope.getPlaylistBtn = false;

                $scope.login = function () {
                    Spotify.login();
                };

                $scope.playlist = function () {
                    Spotify.getUserPlaylists('mashendorp', {limit: 10})
                        .then(function success(data) {
                            $scope.ctuPlaylists = data;
                            console.log(data);
                            if($scope.ctuPlaylists !== null && $scope.ctuPlaylists !== undefined) {
                                $scope.gotPlaylists = false; // for now, later implement animations
                                // setup for animations
                                // $scope.$emit('ctuPlaylist.hideLoginCard', 'on btn click hide the login card with an animation');
                            }
                        });
                };

                var buttonStatus = localStorage.getItem('showgetPlatylistBtn');
                if(buttonStatus) {
                    $scope.getPlaylistBtn = true;
                    $location.path('/citytripmusic');
                }


                $scope.playOnSpotify = function ($index) {
                    var link = $scope.ctuPlaylists.items[$index].external_urls.spotify;
                    $window.open(link, '_blank');
                };

                $scope.playlistDetails = { };

                databaseService.getDocuments()
                    .then(function success(data) {
                        $scope.playlistDetails = data;
                    console.log($scope.playlistDetails);
                         playlistDetails = data;
                },
                function error() {
                    console.log("Error");
                });

                // for(var i=0; i< $scope.ctuPlaylists.items.length; i++) {
                //     if($scope.ctuPlaylists.items[i].name == $scope.playlistDetails[i].results[i].name) {
                //         console.log("We found a match");
                //     }
                // }
            }
        }
    });
})();