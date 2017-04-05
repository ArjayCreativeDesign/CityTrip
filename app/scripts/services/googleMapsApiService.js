/**
 * Created by RobertMesschendorp on 13/11/16.
 */
cityTripApp.service('googleMapsService', function ($http, $q) {

    var cache;

    function initMap() {
        var deferred = $q.defer();
        if (cache) {
            deferred.resolve(cache);
        }else{
            $http.get("https://maps.googleapis.com/maps/api/js?key=AIzaSyAysZp2sSZxjg0o2ZtvKoYRqNm6WisQyWI&callback=initMap"
                )
                .then(function success(response) {
                        console.log(response.data);
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

    function clearCache() {
        cache = null;
    }

    return {
        initMap: initMap,
        clearCache: clearCache
    }
});