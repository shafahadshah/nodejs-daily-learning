const http = require("http");
const formidable = require("formidable");
const path = require("path");

http.createServer((req, res) => {
  if (req.method === "POST") {
    const form = new formidable.IncomingForm({
      uploadDir: "./uploads",
      keepExtensions: true
    });

    form.parse(req, (err, fields, files) => {
      if (err) throw err;

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({
        message: "File uploaded successfully",
        file: files.file
      }));
    });
  } else {
    res.end("Send a POST request");
  }
}).listen(3000, () => {
  console.log("Server running on port 3000");
});
