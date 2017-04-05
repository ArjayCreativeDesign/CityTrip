(function () {
    cityTripApp.directive('ctuNavigation', function(Page) {
        return {
            restrict: 'E',
            replace: true,
            scope: {

            },
            templateUrl: "app/scripts/directives/ctuNavigation/ctuNavigation.html",
            css: "app/scripts/directives/ctuNavigation/ctuNavigation.css",
            link: function () {

            },
            controller: function ($scope, $rootScope, $location, $state, $window, $stateParams) {
                $scope.Page = Page;
                $scope.backButton = true;
                $scope.openRightMenu = null;
                var self = { };

                $scope.openRightMenu = function () {
                    $rootScope.$emit('showRightMenu', 'On button click show menu');
                };

                $scope.navigateBack = function () {
                    $window.history.back();
                };

                self.init = function () {

                };

                // console.log($location);

                // $scope.$watch(function(){
                //     return $location.$$path;
                // }, function(path) {
                //
                //     // $scope.path = path;
                //     // console.log($scope.path);
                //     if(!path) {
                //         console.log(path);
                //         $scope.backButton = false;
                //     }
                // });

                // if($location.$$path === " ") {
                //     $scope.backButton = !$scope.backButton;
                // }

                //This piece of code probably obsolete, should be replaced
                self.init();

                return self;
            }
        }
    })
})();