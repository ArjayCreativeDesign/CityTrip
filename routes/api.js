// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Playlist = require('../models/playlists');
var Cities = require('../models/cities');
// var City = require('../models/city');
var News = require('../models/news');
var RecentTrips = require('../models/recenttrips');
var Continents = require('../models/continents');


// Routes
Playlist.methods(['get', 'put', 'post', 'delete']);
Playlist.register(router, '/playlist');

Cities.methods(['get', 'put', 'post', 'delete']);
Cities.register(router, '/cities');

News.methods(['get', 'put', 'post', 'delete']);
News.register(router, '/news');

Continents.methods(['get', 'put', 'post', 'delete']);
Continents.register(router, '/continents');

RecentTrips.methods(['get', 'put', 'post', 'delete']);
RecentTrips.register(router, '/recenttrips');

// City.methods(['get', 'put', 'post', 'delete']);
// City.register(router, '/cities/id');

// router.get('/playlist', function(req,res) {
//     res.send('Api works');
// });

// Return router
module.exports = router;