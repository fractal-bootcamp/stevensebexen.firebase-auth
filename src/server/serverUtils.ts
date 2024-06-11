import { User } from '@prisma/client';
import prismaClient from "./prismaClient";

export async function createUser(email: string, firebaseId: string): Promise<User> {
  email = email.toLowerCase();
  
  const result = await prismaClient.user.create({
    data: {
      email,
      firebaseId: firebaseId
    }
  });
  console.log('Prisma user created', result);

  return result;
}