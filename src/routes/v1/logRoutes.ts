import express from "express";
import { logController } from "../../controllers";

const logRoute = express.Router();

logRoute.get("/incidents", logController.getIncidents);

logRoute.post("/incident", logController.addIncident);

logRoute.get("/:id", logController.incidentByid);

logRoute.delete("/:id", logController.deleteIncident);

logRoute.get("/ping", logController.ping);

export default logRoute;
