var util = require('util');
var events = require('events');

function apiGet () {}
util.inherits(apiGet, events.EventEmitter);

apiGet.prototype.command = function(apiUrl, success) {
    var request = require("superagent");

    var options = {
        url: apiUrl,
        method: "GET",
        headers: {'Content-Type': 'application/json'}

    };

    request(options.method,options.url)
        .set('Content-Type', 'application/json')
        .end((err,res) => {
            if (err) {
                console.log(error);
                return;
            }
             success(res);
            this.emit('complete');

        })
        // .catch((err) => {
        //     this.emit('complete');
        //     return err
        // });
};

module.exports = apiGet;
