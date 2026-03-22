const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const editorSocket = require("./socket/editorSocket");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

editorSocket(io);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});