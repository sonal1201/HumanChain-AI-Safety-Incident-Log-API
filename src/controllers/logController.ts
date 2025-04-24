import { Request, Response } from "express";

async function ping(req: Request, res: Response) {
  res.json({
    message: "PONG",
  });
}

//Retrieve all incidents.
async function getIncidents(req: Request, res: Response) {}

//Log a new incident.
async function addIncident(req: Request, res: Response) {}

//Retrieve a specic incident by its id.
async function incidentByid(req: Request, res: Response) {}

// Delete the incident with the specied id.
async function deleteIncident(req: Request, res: Response) {}

export default {
  ping,
  getIncidents,
  addIncident,
  incidentByid,
  deleteIncident,
};
