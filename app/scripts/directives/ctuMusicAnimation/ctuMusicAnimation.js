(function() {
    cityTripApp.directive('ctuMusicAnimation', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: { },
            templateUrl: 'app/scripts/directives/ctuMusicAnimation/ctuMusicAnimation.html',
            css: 'app/scripts/directives/ctuMusicAnimation/ctuMusicAnimation.css',
            link: function () {
                
            },
            controller: function ($scope, $timeout) {
                $scope.firstCirle = false;
                $scope.secondCirle = false;
                $scope.thirdCirle = false;
                $scope.fourthCirle = false;
                $scope.fifthCirle = false;
                $scope.sixthCirle = false;
                var i = 0;

                setInterval(function () {

                    $timeout(function () {
                        $scope.secondCirle = !$scope.secondCirle;
                        $scope.fourthCirle = !$scope.fourthCirle;
                    }, 500);

                    $timeout(function () {
                        $scope.secondCirle = !$scope.secondCirle;
                        $scope.fourthCirle = !$scope.fourthCirle;
                        $scope.firstCirle = !$scope.firstCirle;
                        $scope.thirdCirle = !$scope.thirdCirle;
                    }, 1000);

                    $timeout(function () {
                        $scope.secondCirle = !$scope.secondCirle;
                        $scope.fourthCirle = !$scope.fourthCirle;
                        $scope.firstCirle = !$scope.firstCirle;
                        $scope.thirdCirle = !$scope.thirdCirle;
                        $scope.fifthCirle = !$scope.fifthCirle;
                        $scope.sixthCirle = !$scope.sixthCirle;
                    }, 1500);

                    $timeout(function () {
                        $scope.secondCirle = !$scope.secondCirle;
                        $scope.firstCirle = !$scope.firstCirle;
                        $scope.fifthCirle = !$scope.fifthCirle;
                        $scope.sixthCirle = !$scope.sixthCirle;
                    }, 2000);
                }, 1500);
            }
        }
    })
})();