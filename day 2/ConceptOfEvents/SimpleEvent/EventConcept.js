//Simple Event Example

var events = require('events');

var anubhav = new events.EventEmitter();

anubhav.on('speak', () => {
    console.log("how are your folks!");
});

anubhav.emit('speak');