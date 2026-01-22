const fs = require("fs");
const archiver = require("archiver");

function zipFolder(sourceFolder, zipPath) {
  const output = fs.createWriteStream(zipPath);
  const archive = archiver("zip", { zlib: { level: 9 } });

  output.on("close", () => {
    console.log(`✅ Zipped: ${archive.pointer()} bytes`);
  });

  archive.on("error", err => {
    throw err;
  });

  archive.pipe(output);

  // keep folder structure
  archive.directory(sourceFolder, false);

  archive.finalize();
}

// usage
zipFolder("project", "project.zip");
