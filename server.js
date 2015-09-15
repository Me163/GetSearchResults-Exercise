/**
 * Created by Ken on 9/12/15.
 */
var express = require('./config/express');
var app = express();
app.listen(3000);
module.exports = app;
console.log('Server running at http://localhost:3000/');