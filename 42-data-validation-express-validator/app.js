 const app = require("./server");
const connectRoutes = require("./config/routes");

connectRoutes(app);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});