'use strict';

// Declare app level module which depends on views, and components
var cityTripApp = angular.module('cityTrip', [
    'ngRoute',
    'ui.router',
    'angularCSS',
    'ngAnimate',
    'ngMaterial',
    'spotify',
    'ui.select',
    'ngSanitize',
    'myApp.version'

    // require('angular-sanitize')
]);

cityTripApp.config(['$locationProvider',
    '$routeProvider',
    'SpotifyProvider',
    '$httpProvider',
    '$stateProvider',
    '$mdThemingProvider',
    function($locationProvider,
             $routeProvider,
             SpotifyProvider,
             $httpProvider,
             $stateProvider,
             $mdThemingProvider)
    {
        SpotifyProvider.setRedirectUri('http://localhost:3000/#!/citytripmusic');
        SpotifyProvider.setScope('user-read-private playlist-read-private');


        $locationProvider.hashPrefix('!');
        //uiSelectConfig.theme = 'select2';

        $stateProvider
            .state('home', {
                templateUrl: 'app/views/home.html',
                url: '',
                controller: 'HomeController',
                css: 'app/assets/styles/main.css'
            })

            .state('continents', {
                templateUrl:'app/views/continents.html',
                url: '/continents'
            })

            .state('countries', {
                templateUrl: 'app/views/countries.html',
                url: '/countries',
                controller: 'HomeController'
            })

            .state('cities', {
                templateUrl: 'app/views/cities.html',
                url: '/cities'
                // controller: 'HomeController'
            })

            .state('about', {
                templateUrl: 'app/views/about.html',
                url: '/whomadethisbrilliantpage',
                controller: 'AboutController',
                css: 'app/assets/styles/about.css'
            })

            .state('citytripmusic', {
                templateUrl: 'app/views/playlist.html',
                url: '/citytripmusic',
                css: 'app/assets/styles/spotifypage.css',
                controller: 'HomeController'
            })

            .state('photos', {
                templateUrl:'app/views/photos.html',
                url: '/photos',
                controller: 'HomeController'
            })

            .state('city', {
                url: '/city/:id',
                params: {
                    obj:null
                },
                templateUrl: 'app/views/citytrip.html',
                controller: 'HomeController'
            });


        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        // If you already have an auth token
        var token = localStorage.getItem('spotify-token');
        console.log(token);
        if(token !== null && token !== undefined) {
            localStorage.setItem('showgetPlatylistBtn', true);
            SpotifyProvider.setAuthToken(token);
        }else{
            console.log("Please log in first");
        }

        $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();

    }]);