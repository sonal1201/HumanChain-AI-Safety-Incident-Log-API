import { Request, Response } from "express";

async function ping(req: Request, res: Response) {
   res.json({
    message: "PONG",
  });
}

export default {
  ping
};
