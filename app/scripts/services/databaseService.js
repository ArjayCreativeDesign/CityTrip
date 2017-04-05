cityTripApp.service('databaseService', function ($http, $q) {
    var cache;

    function getDocuments() {
        var deferred = $q.defer();
        if (cache) {
            deferred.resolve(cache);
        }
        else {
            $http({
                method: "get",
                url: "http://localhost:8080/api/playlist"
            })
            .then(function success(response) {
                cache = response.data;
                deferred.resolve(cache);
            },
            function failure(reason) {
                console.log("call failed");
                deferred.reject(reason);
            });
        }

        return deferred.promise;
    }

    function getCities() {
        var deferred = $q.defer();
            $http({
                method: "get",
                url: "http://localhost:8080/api/cities"
            })
            .then(function success(response) {
                cache = response.data;
                deferred.resolve(cache);
            },
            function failure(reason) {
                console.log("call failed" + " " + reason);
                deferred.reject(reason);
            });

        return deferred.promise;
    }

    function getCity(id) {
        var url = "http://localhost:8080/api/cities/" + id;
        var deferred = $q.defer();
            $http({
                method: "get",
                url: url
            })
            .then(function success(response) {
                cache = response.data;
                deferred.resolve(cache);
            },
            function failure(reason) {
                console.log("call failed");
                deferred.reject(reason);
            });

        return deferred.promise;
    }

    function getNewsItems() {
        var deferred = $q.defer();
        // if (cache) {
        //     deferred.resolve(cache);
        // }
        // else {
            $http({
                method: "get",
                url: "http://localhost:8080/api/news"
            })
            .then(function success(response) {
                cache = response.data;
                deferred.resolve(cache);
            },
            function failure(reason) {
                console.log("call failed");
                deferred.reject(reason);
            });
        return deferred.promise;
        }

    function getRecentTrips() {
        var deferred = $q.defer();
        $http({
            method: "get",
            url: "http://localhost:8080/api/recenttrips"
        })
            .then(function succes(response) {
                cache = response.data;
                deferred.resolve(cache);
            },
            function failure(reason) {
                console.log("call failed");
                deferred.reject(reason);
            });
        return deferred.promise;
    }



    function getShortCountryInfo() {
        var deferred = $q.defer();
        $http({
            method: "get",
            url: "http://localhost:8080/api/continents"
        })
            .then(function success(response) {
                cache = response.data;
                deferred.resolve(cache);
            },
            function failure(reason) {
                console.log("call failed");
                deferred.reject(reason);
            });
        return deferred.promise;
    }

    function clearCache() {
        cache = null;
    }

    return {
        getDocuments    : getDocuments,
        getCities       : getCities,
        getCity         : getCity,
        getNewsItems    : getNewsItems,
        getRecentTrips  : getRecentTrips,
        getShortCountryInfo: getShortCountryInfo,
        clearCache      : clearCache
    }
});