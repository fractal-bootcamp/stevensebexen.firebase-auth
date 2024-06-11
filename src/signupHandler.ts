import { Request, Response } from "express";
import { getAuth } from "firebase-admin/auth";
import prismaClient from "./prismaClient";

interface SignupFormData {
  email: string
  password: string
}

async function signupHandler(req: Request, res: Response) {
  const formData = req.body as SignupFormData;
  const resultFirebaseCreateUser = await getAuth().createUser({
    email: formData.email,
    password: formData.password
  });
  console.log(resultFirebaseCreateUser);

  const resultPrismaCreateUser = await prismaClient
}

export default signupHandler;