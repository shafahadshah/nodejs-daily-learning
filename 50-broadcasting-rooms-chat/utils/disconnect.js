const handleDisconnect = (socket) => {
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
};

export default handleDisconnect;