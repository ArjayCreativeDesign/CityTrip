var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var citySchema = new mongoose.Schema({
    name: String,
    image: String,
    nickname: String,
    path: String
});

// Return model
module.exports = restful.model('cities', citySchema);