const eventBus = require("./eventBus");

eventBus.on("user:registered", (data) => {
  console.log(`[LOG] New user: ${data.name}`);
});

eventBus.on("order:created", (data) => {
  console.log(`[LOG] Order ID: ${data.orderId}`);
});