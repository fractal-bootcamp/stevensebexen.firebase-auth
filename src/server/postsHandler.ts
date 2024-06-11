import { Request, Response } from "express";
import prismaClient from "./prismaClient";
import auth from "./firebaseAuth";

export default async function postsHandler(req: Request, res: Response) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send('User is not logged in.');

  const decodedToken = await auth.verifyIdToken(token);
  const result = await prismaClient.user.findUnique({
    where: {
      firebaseId: decodedToken.uid
    },
    select: {
      posts: true
    }
  });
  
  res.json(result?.posts || []);
}