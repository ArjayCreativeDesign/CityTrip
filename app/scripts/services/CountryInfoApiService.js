cityTripApp.service('countryInfoService', function ($http, $q) {
    var cache;

    function getCountry(activeCountry) {
        var api = "https://restcountries.eu/rest/v1/name/";
        var url = api + activeCountry;
        var deferred = $q.defer();
        // if (cache) {
        //     deferred.resolve(cache);
        // }
        // else {
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

    // function to retrieve similar data for other countries

    function clearCache() {
        cache = null;
    }

    return {
        getCountry: getCountry,
        clearCache: clearCache
    }

});