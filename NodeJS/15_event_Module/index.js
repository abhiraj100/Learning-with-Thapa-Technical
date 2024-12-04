// Events Module
// Node.js has a built-in module, called "Events",
// where you can create-, fire-, and listen for- your own Events.

// Example 1- Registering for the Event to be fired only one time using once.

// Example 2- Create an event emitter instance and register a couple of callbacks

// Example 3- Registering for the event with callback parameters

// emit is used to trigger an event. 
// on is used to add a callback function that's going to be executed when the event is triggered.
// In Nodejs we call multiple function using single event.

// Step : 1
// const EventEmitter = require("events");  // class create
// // const event = require("events");  
// // const EventEmitter = new event.EventEmitter();  // object create

// const event = new EventEmitter();  // create object

// event.on("sayMyName",  () => {
//     console.log("Your name is abhiraj");
// } );

// event.emit("sayMyName");

// // Step : 2

// event.on("sayMyName",  () => {
//     console.log("Your name is yaduvanshi");
// } );

// event.on("sayMyName",  () => {
//     console.log("Your name is Radhe Radhe ");
// } );

// event.emit("sayMyName");

// Step : 3 - Registering for the event with callback parameters

const EventEmitter = require("events");  // class create
const event = new EventEmitter();

event.on("checkPage", (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("checkPage", 200, "ok");  // in Nodejs

// myName(200, "ok");   // in javascript -> we pass arguments


// In the below case output will not come

// event.emit("sayMyName");

// event.on("sayMyName",  () => {
//     console.log("Your name is abhiraj");
// } );

// The concept is quite simple: emitter objects emit named events that cause
// previously registered listeners to be called. So, an emitter object basically
// has two main features:

// Emitting name events.
// Registering and unregistering listener functions.



