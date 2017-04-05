cityTripApp.factory('Page', function () {
    var title = 'Citytrip';
    return {
        title: function() { return title; },
        setTitle: function(newTitle) { title = newTitle; }
    };
    });