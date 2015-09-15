/**
 * Created by Ken on 9/12/15.
 */

var express = require('express');

module.exports = function( app) {
    var index = require('../controllers/index.server.controller');
    app.get('/queryZillow', index.render);
    app.use(express.static('./public'));
};