import { getAuth as aGetAuth } from "firebase-admin/auth";
import prismaClient from "./prismaClient";

export async function createUser(email: string, password: string): Promise<boolean> {
  email = email.toLowerCase();

  const resultFirebaseCreateUser = await aGetAuth().createUser({
    email,
    password
  });
  console.log('Firebase user created', resultFirebaseCreateUser);
  
  const resultPrismaCreateUser = await prismaClient.user.create({
    data: {
      email,
      firebaseId: resultFirebaseCreateUser.uid
    }
  });
  console.log('Prisma user created', resultPrismaCreateUser);

  return true;
}