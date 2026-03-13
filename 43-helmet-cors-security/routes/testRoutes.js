import express from "express";
import { testEndpoint } from "../controllers/testController.js";

const router = express.Router();

router.get("/test", testEndpoint);

export default router;