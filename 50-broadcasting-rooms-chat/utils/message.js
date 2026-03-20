const handleSendMessage = (socket, io) => {
  socket.on("send_message", ({ room, message }) => {
    io.to(room).emit("receive_message", {
      message,
      sender: socket.id
    });
  });
};

export default handleSendMessage;