/**
 * Created by Ken on 9/12/15.
 */

var request = require('request');
var parseXml = require('xml2js').parseString;
exports.render = function(req, res) {
    //query zillow api here, send back in res

    const url = "http://www.zillow.com/webservice/GetSearchResults.htm";

    //use the same query string the front end used
    request({url:url, qs:req.query}, function(err, response, body) {
        if(err) {
            console.log(err);
            res.status(500).send()
        }
        else {
            //convert xml to json to make things easier for the front end
            parseXml(body, function(err, json) {
                if(err) {
                    console.log("error converting xml to json");
                    res.status(500).send();
                }
                else {
                    res.send(json);
                }
            });
        }
    });
};