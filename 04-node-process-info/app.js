// 1️⃣ process.env → Environment variables
console.log("Environment Variables:");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("PATH:", process.env.PATH);

// You can also create your own env variable
// Run: NODE_ENV=production node app.js (Linux/Mac)
// Run: set NODE_ENV=production && node app.js (Windows)

console.log("--------------------------");

// 2️⃣ process.memoryUsage() → Memory used by the Node process
const memory = process.memoryUsage();

console.log("Memory Usage:");
console.log("RSS:", memory.rss);              // Resident Set Size
console.log("Heap Total:", memory.heapTotal); // Total heap allocated
console.log("Heap Used:", memory.heapUsed);   // Heap actually used
console.log("External:", memory.external);    // External memory

console.log("--------------------------");

// 3️⃣ process.uptime() → Time Node process has been running
console.log("Process Uptime:");
console.log(process.uptime(), "seconds");
