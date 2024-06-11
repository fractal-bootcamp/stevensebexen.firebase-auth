import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export async function loginUser(email: string, password: string): Promise<boolean> {
  const auth = getAuth();
  const resultSignIn = await signInWithEmailAndPassword(auth, email, password);
  console.log('User logged in', resultSignIn.user)

  return true;
}