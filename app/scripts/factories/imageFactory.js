/**
 * Created by RobertMesschendorp on 07/11/16.
 */
cityTripApp.factory('imageFactory', function (flickrService, imageFormatter) {

    var imageList = {};

    imageList.getAllPhotos = function () {
        return flickrService.getPhotos().then(imageFormatter);
    };

        return imageList;
    });