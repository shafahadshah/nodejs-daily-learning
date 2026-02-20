const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "test-files");

function renameFiles(prefix = "file") {
  const files = fs.readdirSync(directoryPath);

  files.forEach((file, index) => {
    const oldPath = path.join(directoryPath, file);
    const ext = path.extname(file);
    const newName = `${prefix}-${index + 1}${ext}`;
    const newPath = path.join(directoryPath, newName);

    fs.renameSync(oldPath, newPath);
    console.log(`Renamed: ${file} → ${newName}`);
  });

  console.log("✅ All files renamed successfully!");
}

renameFiles("image");