/**
 * Created by RobertMesschendorp on 26/11/16.
 */
(function () {
    cityTripApp.directive('ctuDonateDialog', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            templateUrl: 'app/scripts/directives/ctuDonateDialog/ctuDonateDialog.html',
            css: 'app/scripts/directives/ctuDonateDialog/ctuDonateDialog.css',
            link: function () {
                
            },
            controller: function ($scope) {
                $scope.closeDialog = function() {
                    $scope.$emit('closeCtuDonateDialog', 'on buttonclick close the dialog');
                }
            }
        }
    });
})();