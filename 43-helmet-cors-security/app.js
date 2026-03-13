import express from "express";
import cors from "cors";

import corsOptions from "./config/corsOptions.js";
import securityHeaders from "./middleware/securityHeaders.js";
import logger from "./utils/logger.js";
import testRoutes from "./routes/testRoutes.js";

const app = express();

app.use(express.json());
app.use(logger);

app.use(cors(corsOptions));
app.use(securityHeaders);

app.use("/api", testRoutes);

export default app;