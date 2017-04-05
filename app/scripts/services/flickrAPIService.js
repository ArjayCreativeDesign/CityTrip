    cityTripApp.service('flickrService', function ($http, $q) {

        var cache;

        function getPhotos(){
            var deferred = $q.defer();
            if (cache) {
                deferred.resolve(cache);
            }
            else {
                $http({
                    method: "GET",
                    url: "https://api.flickr.com/services/rest/",
                    params: {
                        method: 'flickr.people.getPublicPhotos',
                        format: 'json',
                        user_id: '146125122@N05',
                        nojsoncallback: 1
                    }
                }).then(
                    function success(response) {
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

        function getAlbums(photosetId){
            // var photosetId = photosetId;
            var deferred = $q.defer();
                $http({
                    method: "GET",
                    url: "https://api.flickr.com/services/rest/",
                    params: {
                        method: 'flickr.photosets.getPhotos',
                        format: 'json',
                        user_id: '146125122@N05',
                        photoset_id: photosetId,
                        nojsoncallback: 1
                    }
                }).then(
                    function success(response) {
                        cache = response.data;
                        deferred.resolve(cache);
                    },
                    function failure(reason) {
                        console.log("call failed");
                        deferred.reject(reason);
                    });
            return deferred.promise;
        }

        function getDescriptions(imageId) {
            var photoId = imageId;
            var deferred = $q.defer();
                        $http({
                            method: "GET",
                            url: "https://api.flickr.com/services/rest/",
                            params: {
                                method: "flickr.photos.getInfo",
                                photo_id: photoId,
                                format: "json",
                                nojsoncallback: 1
                            }
                        }).then(
                            function success(response) {
                                cache = response.data;
                                deferred.resolve(cache);
                            },
                            function failure(reason) {
                                console.log("call failed");
                                deferred.reject(reason);
                            });
                return deferred.promise;
        }
        
        function getExifInfo(photoId) {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: "https://api.flickr.com/services/rest/",
                params: {
                    method: "flickr.photos.getExif",
                    photo_id: photoId,
                    format: "json",
                    nojsoncallback: 1
                }
            }).then(
                function success(response) {
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
            getPhotos: getPhotos,
            getAlbums: getAlbums,
            getDescriptions: getDescriptions,
            getExifInfo: getExifInfo,
            clearCache: clearCache
        }
});