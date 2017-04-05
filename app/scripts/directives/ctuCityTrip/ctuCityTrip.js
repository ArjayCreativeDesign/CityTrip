(function () {
    cityTripApp.directive('ctuCityTrip',['Page', 'databaseService', 'flickrService', 'backgroundService',  function (Page, databaseService, flickrService, backgroundService) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                'cityName' : '='
            },
            templateUrl: 'app/scripts/directives/ctuCityTrip/ctuCityTrip.html',
            css: 'app/scripts/directives/ctuCityTrip/ctuCityTrip.css',
            link: function () {

            },
            controller: function ($scope, $rootScope, $state, $timeout) {
                $rootScope.directiveName = backgroundService.backgroundObject.ctuCityTrip;
                $scope.cityData = {};
                $scope.hideMask = true;
                var id = $state.params.obj;
                var photoId = null;
                var index = null;
                var photo = null;
                $scope.hideDescription = true;
                $scope.fullscreenEnabled = false;
                $scope.showDarkTheme = true;
                $scope.thisIsMyFavorite = false;
                $scope.thisIsNotMyFavorite = true;

                databaseService.getCity(id)
                    .then(function success(data) {
                        var cityData = data;
                        $scope.$emit('cityData', cityData);
                        $scope.$broadcast('cityData', cityData);
                        $scope.cityData = data;
                        Page.setTitle(cityData.nickname);
                        FetchPhotos(cityData.photoset_id);
                    },
                    function error(error) {
                        console.log(error)
                    });

                function FetchPhotos(photosetId) {
                $scope.$emit("photoSetId", photosetId);
                flickrService.getAlbums(photosetId)
                    .then(function success(data) {
                        var images = data.photoset.photo;
                        // console.log(images);
                        firstSet(images);
                        secondSet(images);
                        thirdSet(images);
                    },
                    function (error) {
                        console.log(error);
                    });
                }

                function firstSet(images) {
                    $scope.images = [ ];
                    $scope.ids = [ ];

                    for(var i=0; i < 30; i++) {
                        $scope.images.push(images[i]);
                    }

                    return $scope.images;
                }

                function secondSet(images) {
                    $scope.imageSetTwo = [ ];
                    for(var j=30; j < 59;j++ ) {
                        $scope.imageSetTwo.push(images[j]);
                    }

                    return $scope.imageSetTwo;
                }

                function thirdSet(images) {
                    $scope.imageSetThree = [ ];
                    for(var k=59; k < 88; k++) {
                        $scope.imageSetThree.push(images[k]);
                    }

                    return $scope.imageSetThree;
                }

                $scope.giveIndex = function ($index) {
                    photoId = $scope.images[$index].id;
                    console.log(photoId);
                    index = $index;
                    getDescription(photoId);
                };

                function getDescription(photoId) {
                    $scope.descriptions = [];
                    $scope.responseId = [];
                    flickrService.getDescriptions(photoId)
                        .then(function success(response) {
                            $scope.descriptions = response;
                            console.log($scope.descriptions);
                        },
                        function (error) {
                            console.log(error);
                        });
                }


                $scope.showDescription = function (index) {
                    var arrayNum = [];
                    arrayNum = $scope.images[index];
                        $scope.hideDescription = false;
                };

                $scope.toggleFavorite = function () {
                    $scope.thisIsMyFavorite = !$scope.thisIsMyFavorite;
                    $scope.thisIsNotMyFavorite = !$scope.thisIsNotMyFavorite;
                    if($scope.thisIsMyFavorite) {
                        $scope.descriptions[0].isfavorite = 1;
                    }
                };

                $scope.hideDescriptionCard = function ($index) {
                    photo = $scope.images[$index];
                    $scope.photo = photo;
                    $scope.hideDescription = true;

                    $timeout(function () {
                        $scope.hideOverview = true;
                    }, 950);
                    $timeout(function () {
                        $scope.fullscreenEnabled = true;
                    }, 2000);
                }
            }
        }
    }]);
})();