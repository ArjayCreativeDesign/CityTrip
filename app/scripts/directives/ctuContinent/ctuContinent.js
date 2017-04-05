(function () {
    cityTripApp.directive('ctuContinent', ['googleMapsService', 'Page','databaseService', function ( googleMapsService, Page, databaseService) {
        return {
            restrict: 'E',
            replace: true,
            scope: {

            },
            templateUrl: "app/scripts/directives/ctuContinent/ctuContinent.html",
            css: "app/scripts/directives/ctuContinent/ctuContinent.css",
            link: function () {

            },
            controller: function ($scope, $rootScope, $state, $timeout) {

                Page.setTitle("Continents");
                    var self = { },
                        countryId;

                    $scope.isDoneLoading = function () {
                        if(document.ready()) {
                            $scope.isDoneLoading = true;
                        }
                    };

                    self.init = function () {
                        var offSetX,
                            offSetY;

                        $scope.city = null;
                        $scope.showInfoCard = false;
                        $scope.Page = Page;
                        $scope.noContinentIsToggled = true;
                        $scope.europeIsToggled = false;
                        $scope.northAmericaIsToggled = false;
                        $scope.oceaniaIsToggled = false;
                        $scope.southAmericaIsToggled = false;
                        $scope.asiaIsToggled = false;
                        $scope.africaIsToggled =false;
                    };

                    function placeInfoCard(event, offSetX, offSetY) {
                        var pageOffSetX = offSetX,
                            pageOffSetY = offSetY,
                            template    =  document.getElementById('infocard');

                        $scope.countryId = event.target.classList.value ? event.target.classList.value : event.path[1].classList.value;
                        $scope.showInfoCard = !$scope.showInfoCard;

                        template.style.position = 'absolute';
                        template.style.left     = pageOffSetX+'px';
                        template.style.top      = pageOffSetY+'px';

                        databaseService.getShortCountryInfo()
                            .then(function success(data) {
                                    $scope.allCountriesInfo = data;
                                    $scope.country = null;

                                    angular.forEach($scope.allCountriesInfo, function (countryInfo) {
                                        setShortCountryInfo(countryInfo, $scope.countryId);
                                    })
                                },
                                function error() {
                                    console.log("I failed");
                                });
                    }

                    $scope.loadNorthAmericaInfoCard = function (event) {
                        offSetX = 550;
                        offSetY = 174;
                        placeInfoCard(event, offSetX, offSetY);
                        $scope.noContinentIsToggled = !$scope.noContinentIsToggled;
                        $scope.northAmericaIsToggled = !$scope.northAmericaIsToggled;
                    };

                    $scope.loadEuropeInfoCard = function (event) {
                        offSetX = 20;
                        offSetY = 174;
                        placeInfoCard(event, offSetX, offSetY);
                        $scope.noContinentIsToggled = !$scope.noContinentIsToggled;
                        $scope.europeIsToggled = !$scope.europeIsToggled;
                    };

                    $scope.loadAfrikaInfoCard = function (event) {
                        offSetX = 75;
                        offSetY = 120;
                        placeInfoCard(event, offSetX, offSetY);
                        $scope.noContinentIsToggled = !$scope.noContinentIsToggled;
                        $scope.africaIsToggled = !$scope.africaIsToggled;
                    };

                    $scope.loadAsiaInfoCard = function (event) {
                        offSetX = 160;
                        offSetY = 225;
                        placeInfoCard(event, offSetX, offSetY);
                        $scope.noContinentIsToggled = !$scope.noContinentIsToggled;
                        $scope.asiaIsToggled = !$scope.asiaIsToggled;
                    };

                    $scope.loadOceaniaInfoCard = function (event) {
                        offSetX = 175;
                        offSetY = 140;
                        placeInfoCard(event, offSetX, offSetY);
                        $scope.noContinentIsToggled = !$scope.noContinentIsToggled;
                        $scope.oceaniaIsToggled = !$scope.oceaniaIsToggled;
                    };

                    $scope.loadSouthAmericaInfoCard = function (event) {
                        offSetX = 875;
                        offSetY = 140;
                        placeInfoCard(event, offSetX, offSetY);
                        $scope.noContinentIsToggled = !$scope.noContinentIsToggled;
                        $scope.southAmericaIsToggled = !$scope.southAmericaIsToggled;
                    };

                    $scope.closeInfoCard = function () {
                        $scope.showInfoCard = !$scope.showInfoCard;
                        $scope.noContinentIsToggled = true;
                        $scope.europeIsToggled = false;
                        $scope.northAmericaIsToggled = false;
                        $scope.oceaniaIsToggled = false;
                        $scope.southAmericaIsToggled = false;
                        $scope.asiaIsToggled = false;
                        $scope.africaIsToggled =false;
                    };

                    $scope.takeOffTo = function (event) {
                        localStorage.setItem('comeFromHome',$scope.countryId);

                        $timeout(function () {
                            $state.go('countries', $scope.countryId);
                        }, 300);
                    };


                    function setShortCountryInfo(countryInfo, countryId) {
                        if(countryInfo.name === countryId) {
                            $scope.country =
                                [
                                    {
                                        "name"          : countryInfo.name,
                                        "love"          : countryInfo.love,
                                        "no_love"       : countryInfo.no_love,
                                        "known_for"     : countryInfo.known_for,
                                        "favourite_city": countryInfo.favourite_city
                                    }
                                ]
                        }
                    }

                    self.init();

                    return self;
            }
        }
    }
    ]);
})();

