let content = "";

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected");

    // Send current content
    socket.emit("load-document", content);

    // Receive edits
    socket.on("send-changes", (data) => {
      content = data;
      socket.broadcast.emit("receive-changes", data);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};