/**
 * Created by RobertMesschendorp on 20/03/17.
 */
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var recentTripsSchema = new mongoose.Schema({
    title: String,
    date: String,
    image: String
});

// Return model
module.exports = restful.model('recenttrips', recentTripsSchema);