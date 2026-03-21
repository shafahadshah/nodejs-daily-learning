const eventBus = require("./eventBus");
require("./userEvents");
require("./orderEvents");
require("./logger");

function initApp() {
  console.log("App initialized");

  eventBus.emit("user:registered", { name: "John" });
  eventBus.emit("order:created", { orderId: 123 });
}

module.exports = initApp;