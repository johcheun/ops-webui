/*
 * REST utilities.
 */

var Request = require('superagent'),
    Async = require('async');


// Wraps the superagent GET request in a form that can be used as an Asyc
// callback (i.e. callback(err, res)).
function getBody(url, callback) {
    Request.get(url).end(function(err, res) {
        callback(err, err ? null : res.body);
    });
}

// Performs a GET request based on the passed in request parameter which can
// be a string, an array of strings, or an array of an array of strings.  All
// arrays (at each level) are performed in parallel.  For example:
//
// get('/system/bridges', cb)
//      -would simply invoke 'getBody'
//
// get(['/system/bridges/BRIDGE-0/vlans','/system/bridges/BRIDGE-0/ports'], cb)
//      -would call 'getBody" on both URLs in parallel
//
// get( [
//          '/system/bridges/BRIDGE-0/vlans/VLAN-0',
//          '/system/bridges/BRIDGE-0/vlans/VLAN-1',
//          '/system/bridges/BRIDGE-0/vlans/VLAN-2'
//      ], [
//          '/system/bridges/BRIDGE-0/ports/PORT-0',
//          '/system/bridges/BRIDGE-0/ports/PORT-1'
//      ]
// ])
//      -would call 'get' on both URL arrays in parallel, in turn, this would
//      -call 'getBody' on the first array and 'getBody' on the second array.
//
function get(req, cb) {
    if (Array.isArray(req)) {
        if (req[0] && Array.isArray(req[0])) {
            Async.map(req, get, cb);
        } else {
            Async.map(req, getBody, cb);
        }
    } else {
        getBody(req, cb);
    }
}

module.exports = { get: get };
