module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("New client:", socket.id);

    socket.on("disconnect", () => {
      console.log("Client left:", socket.id);
    });
  });
};