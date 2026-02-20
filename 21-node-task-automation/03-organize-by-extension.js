const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "test-files");

function organizeFiles() {
  const files = fs.readdirSync(directoryPath);

  files.forEach(file => {
    const oldPath = path.join(directoryPath, file);
    const ext = path.extname(file).slice(1);

    if (!ext) return;

    const newFolder = path.join(directoryPath, ext);

    if (!fs.existsSync(newFolder)) {
      fs.mkdirSync(newFolder);
      console.log(`Created folder: ${ext}`);
    }

    const newPath = path.join(newFolder, file);
    fs.renameSync(oldPath, newPath);

    console.log(`Moved: ${file} → ${ext}/`);
  });

  console.log("✅ Files organized by extension!");
}

organizeFiles(); 