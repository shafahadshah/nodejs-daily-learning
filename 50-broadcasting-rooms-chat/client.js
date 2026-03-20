import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

// join room
socket.emit("join_room", "room1");

// send message
setTimeout(() => {
  socket.emit("send_message", {
    room: "room1",
    message: "Hello Room 1!"
  });
}, 2000);

// receive message
socket.on("receive_message", (data) => {
  console.log("Message:", data);
});