/**
 * Created by RobertMesschendorp on 07/11/16.
 */
cityTripApp.service('imageFormatter', function() {
    return function imageFormatter(jsonData) {
        // HERE WE FORMAT THE response as desired... that creates a returnArray
        var returnArray = [], key;
        // loop through the countries
        for (key in jsonData['photos']) {
            console.log("I'm looping");
        }
        // end of repeated CODE
        return returnArray; // this is array, we don't do any formatting here
    };
});