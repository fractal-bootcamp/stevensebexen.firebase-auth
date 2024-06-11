import { Request, Response } from "express";

function signupHandler(req: Request, res: Response) {
  console.log(req.body);
}

export default signupHandler;