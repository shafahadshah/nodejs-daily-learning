const fs = require('fs');
const path = require('path');

// File or directory to watch
const filePath = path.join(__dirname, 'example.txt');

fs.watch(filePath, (eventType, filename) => {
  if (filename) {
    console.log(`File changed: ${filename}`);
    console.log(`Event type: ${eventType}`);
  } else {
    console.log('Filename not provided');
  }
});

console.log('Watching for file changes...');
