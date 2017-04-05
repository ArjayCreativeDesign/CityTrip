var connect = require('connect');
var serveStatic = require('serve-static');
var port = (process.env.VCAP_APP_PORT || 3000);
var host = (process.env.VCAP_APP_HOST || 'localhost');
connect().use(serveStatic(__dirname)).listen(port,host);

//Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//MongoDB

//Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


//Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(8080);
console.log('Listening on port 8080...');