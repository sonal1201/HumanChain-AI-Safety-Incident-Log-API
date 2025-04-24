import express from "express";
import logController from "../../controllers/logController";


const logRoute = express.Router();

logRoute.get("/incidents", logController.getIncidents);

logRoute.post("/incident", logController.addIncident);

logRoute.get("/incident/:id", logController.incidentByid);

logRoute.delete("/incident/:id", logController.deleteIncident);

logRoute.get("/ping", logController.ping);

export default logRoute;
