import { Request, Response } from "express";

function loginHandler(req: Request, res: Response) {
  res.send('dragons');
}

export default loginHandler;