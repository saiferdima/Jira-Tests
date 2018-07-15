var util = require('util');
var events = require('events');

function apiGet () {}
util.inherits(apiGet, events.EventEmitter);

apiGet.prototype.command = function(apiUrl, success) {
    var request = require("request");

    var options = {
        url: apiUrl,
        method: "GET",
        headers: {'Content-Type': 'application/json'}

    };

    request(options, function (error, response) {
        if (error) {
            console.log(error);
            return;
        }

        success(response);
        this.emit('complete');
    }.bind(this));
};

module.exports = apiGet;
