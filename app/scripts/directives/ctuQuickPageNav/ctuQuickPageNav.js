(function () {
    cityTripApp.directive('ctuQuickPageNav', function ($window) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                scroll: '=?scrollPosition'
            },
            templateUrl: 'app/scripts/directives/ctuQuickPageNav/ctuQuickPageNav.html',
            css: 'app/scripts/directives/ctuQuickPageNav/ctuQuickPageNav.css',
            link: function (scope, element, attrs) {
                var windowEl = angular.element($window);

                var handler = function() {
                    scope.scroll = window.scrollY;
                };
                windowEl.on('scroll', scope.$apply.bind(scope, handler));
                handler();
            }, 
            controller: function ($scope) {
                $scope.showQuickNavUp   = false;
                $scope.showQuickNavDown = true;
                $scope.scroll = 0;

                $scope.navigateToTop = function () {
                    window.scrollTo(0,0);
                };

                $scope.navigateToMiddle =function () {
                    window.scrollTo(0, (1/2 * document.body.scrollHeight));
                }

                $scope.navigateToBottom = function () {
                    window.scrollTo(0, document.body.scrollHeight );
                };
            }
        }
    })
})();