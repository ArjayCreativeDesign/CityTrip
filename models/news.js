/**
 * Created by RobertMesschendorp on 13/03/17.
 */
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var newsSchema = new mongoose.Schema({
    title: String,
    message: String
});

// Return model
module.exports = restful.model('news', newsSchema);