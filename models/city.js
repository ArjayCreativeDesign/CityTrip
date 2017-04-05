/**
 * Created by RobertMesschendorp on 27/11/16.
 */
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var cityDetailsSchema = new mongoose.Schema({
    name: String,
    image: String,
    nickname: String,
    path: String
});

// Return model
module.exports = restful.model('city', cityDetailsSchema);