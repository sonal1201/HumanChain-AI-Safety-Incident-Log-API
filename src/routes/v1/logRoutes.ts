import express from "express";

const logRoute = express.Router();

logRoute.get("/incidents");
logRoute.post("/incident");
logRoute.get("/:id");
logRoute.delete("/:id");

export = logRoute;
