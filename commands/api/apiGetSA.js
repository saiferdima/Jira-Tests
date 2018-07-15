/**
 * This is how most of the Nightwatch's own commands are written.
 * Your command module needs to export a class constructor with a command instance method representing the command function.
 * Commands written like this should inherit from EventEmitter and manually signal the complete event, to indicate command completion.
 * Class-based command methods are run in the context (the value of this) of the class instance.
 * The test api object is available as this.api or this.client.api, where this.client is the Nightwatch instance itself
 * */
var util = require('util');
var events = require('events');

function apiGetSA () {}
util.inherits(apiGetSA, events.EventEmitter);

apiGetSA.prototype.command = function(apiUrl, success) {
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
            this.emit('complete'); //to indicate command completion.

        })
        // .catch((err) => {
        //     this.emit('complete');
        //     return err
        // });
};

module.exports = apiGetSA;
