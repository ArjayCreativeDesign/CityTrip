/**
 * Created by RobertMesschendorp on 06/11/16.
 */
(function () {
    cityTripApp.directive('ctuMenu', function ($state) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                
            },
            templateUrl: "app/scripts/directives/ctuMenu/ctuMenu.html",
            css: "app/scripts/directives/ctuMenu/ctuMenu.css",
            link: function () {
                
            },
            controller: function ($scope, $rootScope, $mdSidenav, $location, $state) {
                $scope.showRightMenu = false;

                $rootScope.$on('showRightMenu', function(event, data) {
                    $mdSidenav('right').toggle();
                    $scope.showRightMenu = true;
                });

                $scope.closeMenu = function () {
                    $mdSidenav('right').toggle();
                };

                $scope.menuitems =
                    [
                        {
                            "name": "continents",
                            "icon": "../../../../app/assets/images/ic_language_black_24px.svg"
                        },
                        {
                            "name": "countries",
                            "icon": "../../../../app/assets/images/ic_public_black_24px.svg"
                        },
                        {
                            "name": "cities",
                            "icon": "../../../../app/assets/images/ic_location_city_black_24px.svg"
                        },
                        {
                            "name": "citytripmusic",
                            "icon": "../../../../app/assets/images/ic_queue_music_black_24px.svg"
                        },
                        {
                            "name": "photos",
                            "icon": "../../../../app/assets/images/ic_photo_album_black_24px.svg"
                        },
                        {
                            "name": "about",
                            "icon": "../../../../app/assets/images/ic_help_black_24px.svg"
                        }
                    ];

                $scope.NavigateTo = function(menuitem) {
                    var location = menuitem.name;
                    $state.go(location);
                    $scope.showRightMenu = false;
                }
            }
        }
    });
})();