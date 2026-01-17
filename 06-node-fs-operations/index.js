const fs = require("fs");
const path = require("path");

// Paths
const dirPath = path.join(__dirname, "data");
const filePath = path.join(dirPath, "example.txt");

// 1. Create Directory
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
  console.log("Directory created");
}

// 2. Write File
fs.writeFileSync(filePath, "Hello, this is a file system example!");
console.log("File written");

// 3. Read File
const content = fs.readFileSync(filePath, "utf8");
console.log("File content:", content);

// 4. Append to File
fs.appendFileSync(filePath, "\nThis line was appended.");
console.log("File updated");

// 5. Delete File
fs.unlinkSync(filePath);
console.log("File deleted");

// 6. Delete Directory
fs.rmdirSync(dirPath);
console.log("Directory deleted");
