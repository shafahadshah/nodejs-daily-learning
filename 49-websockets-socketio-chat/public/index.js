// Full frontend logic for chat + notifications

const socket = io();

// Chat elements
const form = document.getElementById("form");
const input = document.getElementById("input");
const messages = document.getElementById("messages");

// Notification button
const notifyBtn = document.getElementById("notifyBtn");

// Send chat message
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});

// Receive chat message
socket.on("chat message", (msg) => {
  const li = document.createElement("li");
  li.textContent = msg;
  messages.appendChild(li);
});

// Send notification
notifyBtn.addEventListener("click", () => {
  socket.emit("notify", "New notification!");
});

// Receive notification
socket.on("notify", (data) => {
  alert(data);
});

/*
FINAL FILE INFO:
- Handles BOTH chat + notifications
- Integrates all socket events
- Works with server.js using Socket.io
- Folder: 49-websockets-socketio-chat/public/
*/