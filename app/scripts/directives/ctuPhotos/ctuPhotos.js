/**
 * Created by RobertMesschendorp on 06/11/16.
 */
(function () {
    cityTripApp.directive('ctuPhotos', ['flickrService', 'imageFormatter', 'imageFactory', 'Page', function(flickrService,imageFormatter, imageFactory, Page) {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            templateUrl: "app/scripts/directives/ctuPhotos/ctuPhotos.html",
            css: "app/scripts/directives/ctuPhotos/ctuPhotos.css",
            link: function () {

            },
            controller: function ($scope, $rootScope, $window, flickrService) {
                Page.setTitle("Photos");

                $scope.images = null;

                // flickrService.getPhotos()
                //     .then(function success(data) {
                //             //Do your stuff with data here
                //             $scope.images = data.photos.photo;
                //         },
                //         function(error) {
                //             console.log(error);
                //         });

                flickrService.getAlbums()
                    .then(function success(data) {
                        console.log(data);
                    },
                    function (error) {
                        console.log(error);
                    });
            }
        }
    }])
})();
