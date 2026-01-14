const EventEmitter = require('events');

class NodeEvents extends EventEmitter {}

const nodeEvents = new NodeEvents();

// Register a listener for a custom event 'lessonStart'
nodeEvents.on('lessonStart', (topic) => {
  console.log(`Lesson started: ${topic}`);
});

// Register a listener for a custom event 'lessonComplete'
nodeEvents.on('lessonComplete', (topic) => {
  console.log(`Lesson completed: ${topic}`);
});

// Emit events with the topic name
const topic = 'Node Events – Using EventEmitter';

nodeEvents.emit('lessonStart', topic);

// Simulate some learning activity with a timeout
setTimeout(() => {
  nodeEvents.emit('lessonComplete', topic);
}, 2000);
