const handleJoinRoom = (socket) => {
  socket.on("join_room", (room) => {
    socket.join(room);
    console.log(`User ${socket.id} joined ${room}`);
  });
};

export default handleJoinRoom;