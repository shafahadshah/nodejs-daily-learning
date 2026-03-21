const eventBus = require("./eventBus");

eventBus.on("user:registered", (data) => {
  console.log(`User registered: ${data.name}`);
});