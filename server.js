/**
 * Created by Ken on 9/12/15.
 */
var express = require('./config/express');
var app = express();
var port = process.env.PORT || 3000;
app.listen(port);
module.exports = app;
console.log('Server running at http://localhost:'+port);