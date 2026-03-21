const eventBus = require("./eventBus");

eventBus.on("order:created", (data) => {
  console.log(`Order created: ${data.orderId}`);
});