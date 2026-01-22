const fs = require("fs");
const unzipper = require("unzipper");

function unzipFolder(zipPath, destFolder) {
  fs.createReadStream(zipPath)
    .pipe(unzipper.Extract({ path: destFolder }))
    .on("close", () => {
      console.log("✅ Unzipped successfully");
    });
}

// usage
unzipFolder("project.zip", "project_unzipped");
