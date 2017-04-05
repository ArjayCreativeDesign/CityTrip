(function () {
    cityTripApp.directive('ctuVariableScrollSpeeds', function (databaseService) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                "scrollspeed": "="
            },
            templateUrl: "app/scripts/directives/ctuHome/ctuHome.html",
            css: "app/scripts/directives/ctuHome/ctuHome.css",
            link: function () {
            },
            controller: function ($scope, $window) {
                var self = { };
                var myBoxes = $('.scrolling-columns');
                $(window).scroll(function(){
                    var scrollTop = $(window).scrollTop();
                    scrollTop = scrollTop / 3;
                    myBoxes.each(function(){
                        var $this = $(this);
                        var scrollspeed = parseInt($this.data('scroll-speed')),
                            offset =  -scrollTop / -scrollspeed;
                        $this.css('transform' , 'translateY(' + offset + 'px)');
                    });
                });

                self.init = function () {
                    // $scope.imagePath = "";
                    databaseService.getNewsItems()
                        .then(function success(news) {
                                $scope.stories = news;
                            },
                            function (error) {
                                console.log("I'm failed " + " "+ error);
                            });

                    databaseService.getRecentTrips()
                        .then(function success(recentTrips) {
                            console.log(recentTrips);
                            $scope.recenttrips = recentTrips;
                        },
                        function (error) {
                            console.log("I'm failed " + " "+ error);
                        })
                };

                self.init();

                return self;
            }
        }
    })
})();