const { addClient, removeClient } = require("./notificationService");

function initSocket(io) {
  io.on("connection", (socket) => {
    console.log("Connected:", socket.id);

    addClient(socket);

    socket.on("disconnect", () => {
      removeClient(socket.id);
      console.log("Disconnected:", socket.id);
    });
  });
}

module.exports = initSocket;