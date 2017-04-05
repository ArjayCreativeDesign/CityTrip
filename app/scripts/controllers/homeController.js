cityTripApp.controller('HomeController',['$scope', '$window', 'Page', 'databaseService', function ($scope, $window, Page, databaseService) {
    var self = { };

    $scope.isDoneLoading = function () {
        if(document.ready()) {
            $scope.isDoneLoading = true;
        }
    };

    self.init = function () {
        $('.caption').hide();

        $scope.$on('cityData', function (event, data) {
            switch(data.name) {
                case 'New York City':
                case 'Birmingham':
                case 'Boom':
                    $scope.cityName = false;
                    $scope.cityAlt = false;
                    $scope.cityStar = false;
                    break;
                case 'Busan':
                case 'Suwon':
                    $scope.cityName = true;
                    $scope.cityAlt = false;
                    $scope.cityStar = true;
                    break;
                case 'Beijing':
                case 'Groningen':
                case 'Lima':
                    $scope.cityName = true;
                    $scope.cityAlt = true;
                    $scope.cityStar = false;
                    break;
                default:
                    $scope.cityName = false;
                    $scope.cityAlt = false;
                    $scope.cityStar = false;
                    break;
            }
        });

        $("#DateCountdown").TimeCircles({
            "animation": "smooth",
            "bg_width": 1.2,
            "fg_width": 0.04666666666666667,
            "circle_bg_color": "#60686F",
            "time": {
                "Days": {
                    "text": "Days",
                    "color": "#444C5C",
                    "show": true
                },
                "Hours": {
                    "text": "Hours",
                    "color": "#CE5A57",
                    "show": true
                },
                "Minutes": {
                    "text": "Minutes",
                    "color": "#78A5A3",
                    "show": true
                },
                "Seconds": {
                    "text": "Seconds",
                    "color": "#E1B16A",
                    "show": true
                }
            }
        });

    };


    $scope.nextSlide = function () {
        var currentSlide = $('.active-slide');
        var currentDot = $(".active-dot");

        var nextSlide = currentSlide.next();
        var nextDot = currentDot.next();

        if(nextSlide.length === 0) {
            nextSlide = $(".slide").first();
            nextDot = $(".dot").first();
        }

        currentSlide.fadeOut(400).removeClass("active-slide");
        nextSlide.fadeIn(400).addClass("active-slide");

        currentDot.removeClass("active-dot");
        nextDot.addClass("active-dot");
    };

    $scope.previousSlide = function () {
        var currentSlide = $(".active-slide");
        var currentDot = $(".active-dot");

        var previousSlide = currentSlide.prev();
        var previousDot = currentDot.prev();

        if(previousSlide.length === 0) {
            previousSlide = $(".slide").last();
            previousDot = $(".dot").last();
        }

        currentSlide.fadeOut(400).removeClass("active-slide");
        previousSlide.fadeIn(400).addClass("active-slide");

        currentDot.removeClass("active-dot");
        previousDot.addClass("active-dot");
    };

    $('.image-container').hover(function()	{
        $('.caption').show();
    });

    self.init();

    return self;
}]);
