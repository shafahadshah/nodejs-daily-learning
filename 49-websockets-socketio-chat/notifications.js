module.exports = (io) => {
  io.on("connection", (socket) => {
    socket.on("notify", (data) => {
      socket.broadcast.emit("notify", data);
    });
  });
};