const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "test-files");

function cleanFolder() {
  if (!fs.existsSync(directoryPath)) {
    console.log("❌ Folder does not exist");
    return;
  }

  const files = fs.readdirSync(directoryPath);

  files.forEach(file => {
    const filePath = path.join(directoryPath, file);
    fs.unlinkSync(filePath);
    console.log(`Deleted: ${file}`);
  });

  console.log("✅ Folder cleaned!");
}

cleanFolder();