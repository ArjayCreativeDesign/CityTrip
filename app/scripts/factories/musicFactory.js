/**
 * Created by RobertMesschendorp on 08/11/16.
 */
cityTripApp.factory('imageFactory', function (flickrService, imageFormatter) {

    var playlistList = {};

    playlistList.getPlaylist = function () {
        return flickrService.getPlaylist().then(imageFormatter);
    };

    return playlistList;
});