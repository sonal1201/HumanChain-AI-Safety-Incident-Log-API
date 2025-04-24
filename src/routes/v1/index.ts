import express from "express";
import logRoute from "./logRoutes";

const v1Route = express.Router();

v1Route.use("/log", logRoute);

export = v1Route;
