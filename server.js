/**
 * Created by Ken on 9/12/15.
 */
var express = require('./config/express');
var app = express();
app.listen(80);
module.exports = app;
console.log('Server running at http://localhost:80/');