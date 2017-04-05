/**
 * Created by RobertMesschendorp on 16/11/16.
 */
cityTripApp.service('worldbankDataService', function ($http, $q) {
    var cache;

    function getCountries() {
        var deferred = $q.defer();
        if (cache) {
            deferred.resolve(cache);
        }
        else {
            $http({
                method: "get",
                url: "http://api.worldbank.org/countries?per_page=304&format=json"
            })
                .then(function success(response) {
                        cache = response.data;
                        console.log(cache);
                        var values = cache[1];
                        var result = values.map(function(a) {return a.name});
                        var countries = [ ];
                        angular.forEach(result, function (value, key) {
                            this.push({'id':key , 'name':value});
                        }, countries);
                        console.log(countries);
                        deferred.resolve(countries);
                    },
                    function failure(reason) {
                        console.log("call failed");
                        deferred.reject(reason);
                    });
        }
        return deferred.promise;
    }

    function clearCache() {
        cache = null;
    }

    return {
        getCountries: getCountries,
        clearCache: clearCache
    }
});