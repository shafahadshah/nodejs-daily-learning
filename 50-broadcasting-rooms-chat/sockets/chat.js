import handleJoinRoom from "../utils/joinRoom.js";
import handleSendMessage from "../utils/message.js";
import handleDisconnect from "../utils/disconnect.js";

const socketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    handleJoinRoom(socket);
    handleSendMessage(socket, io);
    handleDisconnect(socket);
  });
};

export default socketHandler;