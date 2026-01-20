const fs = require("fs");

// ===============================
// 1. Readable Stream
// ===============================
const readableStream = fs.createReadStream("input.txt", {
  encoding: "utf8",
  highWaterMark: 16 // chunk size
});

readableStream.on("data", (chunk) => {
  console.log("Reading chunk:", chunk);
});

readableStream.on("end", () => {
  console.log("Finished reading file\n");
});

// ===============================
// 2. Writable Stream
// ===============================
const writableStream = fs.createWriteStream("output.txt");

writableStream.write("Hello from Writable Stream\n");
writableStream.write("Streams are fast and memory efficient\n");
writableStream.end("Done writing\n");

// ===============================
// 3. Piping Stream (BEST PRACTICE)
// ===============================
const readPipe = fs.createReadStream("input.txt");
const writePipe = fs.createWriteStream("pipe-output.txt");

readPipe.pipe(writePipe);

writePipe.on("finish", () => {
  console.log("Piping completed successfully");
});
