import { Request, Response } from "express";
import { getAuth } from "firebase-admin/auth";

interface SignupFormData {
  email: string
  password: string
}

async function signupHandler(req: Request, res: Response) {
  const formData = req.body as SignupFormData;
  const newUser = await getAuth().createUser({
    email: formData.email,
    password: formData.password
  });
  console.log(newUser);
}

export default signupHandler;