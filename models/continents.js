/**
 * Created by RobertMesschendorp on 15/03/17.
 */
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var continentsSchema = new mongoose.Schema({
    name: String,
    love: String,
    no_love: String,
    known_for: String,
    favourite_city: String
});

// Return model
module.exports = restful.model('continents', continentsSchema);