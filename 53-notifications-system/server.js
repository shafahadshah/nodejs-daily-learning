const http = require("http");
const { Server } = require("socket.io");
const app = require("./app");
const initSocket = require("./socket");
const config = require("./config.json");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

initSocket(io);

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});