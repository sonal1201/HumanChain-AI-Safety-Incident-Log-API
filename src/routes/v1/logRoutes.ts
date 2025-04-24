import express from "express";
import { logController } from "../../controllers";

const logRoute = express.Router();

// logRoute.get("/incidents");
// logRoute.post("/incident");
// logRoute.get("/:id");
// logRoute.delete("/:id");
logRoute.get("/ping", logController.ping);

export default logRoute;
