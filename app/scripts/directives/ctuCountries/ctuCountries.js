(function () {
    cityTripApp.directive('ctuCountries',['worldbankDataService', 'countryInfoService', 'Page', function (worldbankDataService, countryInfoService, Page) {
        return {
            // require: 'uiSelect',
            restrict: 'E',
            replace: true,
            scope: {},
            templateUrl: 'app/scripts/directives/ctuCountries/ctuCountries.html',
            css: 'app/scripts/directives/ctuCountries/ctuCountries.css',
            link: function () {

            },
            controller: function ($scope, $http, $rootScope) {
                Page.setTitle("Countries");

                var country = {
                    value: {
                        name: $scope.countryId
                    }
                };

                $scope.selectedByUser = null;
                $scope.itemArray = null;
                $scope.availableCountries = null;
                $scope.nonAvailableCountries = true;
                var countryArray = [ ];

                worldbankDataService.getCountries()
                    .then(function success(data) {
                        $scope.itemArray = data;
                        countryArray = [ "Sweden", "Netherlands", "Korea, Rep.", "Japan", "China", "Turkey", "Italy",
                                         "Spain", "Germany", "Denmark", "United Kingdom", "Croatia", "Slovakia", "Czech",
                                         "France", "United States", "Mexico", "Peru", "Brazil"
                        ];
                        var allCountries = $scope.itemArray;
                           ToggleCard($scope.itemArray, countryArray);
                    },
                    function error() {
                        console.log('error');
                    });

                function ToggleCard() {
                    if(country === undefined) {
                        $scope.selected = { value: $scope.itemArray[0] };
                    } else {
                        $scope.selected = country;
                    }
                    $scope.$watch('selected', function (newValue, oldValue) {
                        $scope.msg = {
                            name: $scope.selected.value.name
                        }
                    }, true);


                    $scope.selectedCountry = function () {
                        if(country === undefined) {
                            $scope.selected = { value: $scope.itemArray[0] };
                        } else {
                            $scope.selected = country;
                        }
                        if (countryArray.indexOf($scope.selected.value.name) !== -1) {
                            $scope.availableCountries = true;
                            $scope.nonAvailableCountries = true;
                            getCountryInfo($scope.selected.value.name);
                        } else {
                            $scope.availableCountries = false;
                            $scope.nonAvailableCountries = false;
                        }
                    }
                }

                function getCountryInfo() {
                $scope.information = { };
                countryInfoService.getCountry($scope.msg.name)
                    .then (function success(data) {
                        $scope.information = data;
                        // $scope.watch('selected', function (newValue, oldValue) {
                        //     console.log('in the watch');
                        // }, true);
                        console.log($scope.information = data);
                    },
                    function error() {
                        console.log('error');
                    });

                return {
                    ToggleCard: ToggleCard
                }
                }

                $scope.evaluateStatus = function () {
                    if($scope.nonAvailableCountries == false) {
                        $scope.dialogIsOpen = true;
                    }
                };

                // Events

                $rootScope.$on('closeCtuDonateDialog', function (event, data) {
                    $scope.nonAvailableCountries = true;
                    $scope.dialogIsOpen = false;
                });


            }
        }
    }]);
})();
