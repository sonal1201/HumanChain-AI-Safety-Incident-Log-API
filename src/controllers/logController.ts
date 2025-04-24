import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import LogService from "../services/logService";

async function ping(req: Request, res: Response) {
  res.json({
    message: "PONG",
  });
}

const logService = new LogService();

//Retrieve all incidents.
async function getIncidents(req: Request, res: Response) {
  try {
    const response = await logService.getAllLogs();
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched all logs",
      error: {},
      data: response,
    });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Failed to fetch logs",
      error: error.message || "Internal Server Error",
      data: [],
    });
  }
}

//Log a new incident.
async function addIncident(req: Request, res: Response) {
  try {
    const response = await logService.createLog(req.body);
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully created a log",
      error: {},
      data: response,
    });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Failed to fetch logs",
      error: error.message || "Internal Server Error",
      data: [],
    });
  }
}

//Retrieve a specic incident by its id.
async function incidentByid(req: Request, res: Response) {
  try {
    const response = await logService.getLog(req.params.id);
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched the log",
      error: {},
      data: response,
    });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Failed to fetch logs",
      error: error.message || "Internal Server Error",
      data: [],
    });
  }
}

// Delete the incident with the specied id.
async function deleteIncident(req: Request, res: Response) {
  try {
    const response = await logService.deleteLog(req.params.id);
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully deleted the log",
      error: {},
      data: response,
    });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Failed to fetch logs",
      error: error.message || "Internal Server Error",
      data: [],
    });
  }
}

export default {
  ping,
  getIncidents,
  addIncident,
  incidentByid,
  deleteIncident,
};
