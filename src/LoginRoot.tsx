import { useState } from 'react';
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000'; // Where can I put this?

enum Mode {
  NONE,
  LOGIN,
  SIGNUP
}

async function logIn(email: string, password: string) {
  const loginResult = await axios.post(`${SERVER_URL}/login`, { email, password });
  console.log(loginResult);
}

async function signUp(email: string, password: string) {
  const signupResult = await axios.post(`${SERVER_URL}/signup`, { email, password });
  console.log(signupResult);
}

function LoginRoot() {
  const [mode, setMode] = useState<Mode>(Mode.NONE);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div className='flex m-auto flex-col w-1/2 gap-2'>
      <div className='flex flex-row flex-1 justify-between gap-2'>
        <p className='text-violet-700 hover:cursor-pointer flex-1 text-center'
          style={{ backgroundColor: mode === Mode.LOGIN ? '#eddaf5' : '#ffffff' }}
          onClick={() => setMode(Mode.LOGIN)}>
            Log In
        </p>
        <p className='text-violet-700 hover:cursor-pointer flex-1 text-center'
          style={{ backgroundColor: mode === Mode.SIGNUP ? '#eddaf5' : '#ffffff' }}
          onClick={() => setMode(Mode.SIGNUP)}>
            Sign Up
        </p>
      </div>
      { mode === Mode.LOGIN
        ? <LoginForm
          onEmailInputChange={newValue => setEmail(newValue)}
          onPasswordInputChange={newValue => setPassword(newValue)}
          onSubmit={() => logIn(email, password)}
          email={email}
          password={password}
        />
        : mode === Mode.SIGNUP
        ? <SignupForm
          onEmailInputChange={newValue => setEmail(newValue)}
          onPasswordInputChange={newValue => setPassword(newValue)}
          onSubmit={() =>signUp(email, password)}
          email={email}
          password={password}
        />
        : <></>
      }
    </div>
  )
}

export default LoginRoot