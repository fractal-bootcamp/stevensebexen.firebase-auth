import { Request, Response } from "express";
import { createUser } from "./serverUtils";

interface SignupFormData {
  email: string
  firebaseId: string
}

async function signupHandler(req: Request, res: Response) {
  const formData = req.body as SignupFormData;

  try {
    await createUser(formData.email, formData.firebaseId);
  } catch (e) {
    console.error(e);
    return res.status(418).send('Failed to dragon.');
  }

  return res.json({ success: true, email: formData.email });
}

export default signupHandler;