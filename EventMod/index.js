/* Event Module
node.js has a built-in module,called "Events"
where you can create-, fire-, and listen for- your own events.
 example 1 - Registering for the event to be fired pnly one time using onece.
 example 2 - create an event emmiter instance and register a couple of callbacks
 example 3 - Registering for the event with calback parameters*/

const  EventEMitter = require("events");  //where EventEmitter is class (captial E)

const event = new EventEMitter();
event.on("CheckPage", (sc, msg)=> {
    console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("CheckPage", 200, "ok")