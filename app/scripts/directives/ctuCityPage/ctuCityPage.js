/**
 * Created by RobertMesschendorp on 28/03/17.
 */
(function () {
    cityTripApp.directive('ctuCityPage', ['Page', 'databaseService', 'flickrService', 'backgroundService', function (Page, databaseService, flickrService, backgroundService) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                'cityName': '='
            },
            templateUrl: 'app/scripts/directives/ctuCityPage/ctuCityPage.html',
            css: 'app/scripts/directives/ctuCityPage/ctuCityPage.css',
            link: function () {

            },
            controller: function ($scope, $rootScope, $state, $timeout) {
                // Page.setTitle("Alternative City Trip");
                $scope.Page = Page;
                console.log(Page);
                $rootScope.directiveName = backgroundService.backgroundObject.ctuCityTrip;
                $scope.cityData = {};
                $scope.hideMask = true;
                var id = $state.params.obj;
                var photoId = null;
                var index = null;
                var photo = null;
                var photoIdsArray = [ ];
                $scope.hideDescription = true;
                $scope.fullscreenEnabled = false;
                $scope.showDarkTheme = true;
                $scope.thisIsMyFavorite = false;
                $scope.thisIsNotMyFavorite = true;
                $scope.showToolTips = false;
                var self = { };

            self.init = function () {
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
                                $scope.images = images;
                                // createPhotoIdsArray($scope.images);
                            },
                            function (error) {
                                console.log(error);
                            });
                }
            };

            self.init();

                function getDescription(photoId) {
                    $scope.responseId = [];

                    flickrService.getDescriptions(photoId)
                        .then(function success(response) {
                                $scope.descriptions = response;
                            },
                            function (error) {
                                console.log(error);
                            });
                }

                function getExifInformation(photoId) {
                    flickrService.getExifInfo(photoId)
                        .then(function success(exifinfo) {
                                $scope.exifinfo = exifinfo;
                            },
                            function (error) {
                                console.log(error);
                            });
                }

               $scope.toggleDescriptionCards = function (image, index) {
                    console.log(index);
                    $scope.clickedindex = index;
                   getDescription(image.id);
                   getExifInformation(image.id);
                   $scope.showToolTips = !$scope.showToolTips;
                }
            }
        }
    }]);
}());