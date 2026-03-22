const socket = io();
const editor = document.getElementById("editor");

socket.on("load-document", (data) => {
  editor.value = data;
});

editor.addEventListener("input", () => {
  socket.emit("send-changes", editor.value);
});

socket.on("receive-changes", (data) => {
  editor.value = data;
});