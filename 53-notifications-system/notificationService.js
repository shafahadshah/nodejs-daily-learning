let clients = [];

function addClient(socket) {
  clients.push(socket);
}

function removeClient(id) {
  clients = clients.filter(c => c.id !== id);
}

function sendNotification(message) {
  clients.forEach(client => {
    client.emit("notification", message);
  });
}

module.exports = {
  addClient,
  removeClient,
  sendNotification
};