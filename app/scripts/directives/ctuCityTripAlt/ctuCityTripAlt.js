(function () {
    cityTripApp.directive('ctuCityTripAlternative', function (backgroundService, databaseService, flickrService) {
        return {
            restrict: 'E',
            replace: true,
            scope: { },
            templateUrl: 'app/scripts/directives/ctuCityTripAlt/ctuCityTripAlt.html',
            css: 'app/scripts/directives/ctuCityTripAlt/ctuCityTripAlt.css',
            link: function () {

            },
            controller: function ($scope, $rootScope, $timeout, $state, Page) {
                $rootScope.directiveName = backgroundService.backgroundObject.ctuAltCityTrip;
                $scope.showAnimation = false;
                $scope.hideAnimation = false;
                var self = { };

                $timeout(function () {
                    $scope.showAnimation = true;
                },4000);

                $scope.showPicture = function(index) {
                    console.log(index);
                };

                $scope.startHideAnimation = function () {
                        $scope.hideAnimation = true;
                        $scope.showAnimation = false;
                };

                self.init = function () {
                    var id = $state.params.obj;

                    databaseService.getCity(id)
                        .then(function success(data) {
                                var cityData = data;
                                $scope.$emit('cityData', cityData);
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
                                    console.log(images);
                                    createPhotoArray(images);
                                },
                                function (error) {
                                    console.log(error);
                                });
                    }


                    function createPhotoArray(images) {
                        $scope.images = [ ];
                        var i;

                        for(i = 0; i < images.length; i++) {
                            $scope.images.push(images[i]);
                        }

                        return $scope.images;
                    }
                };

                self.init();

                return self;

            }
        }
    })
})();