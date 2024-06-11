import { useState } from "react"
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

enum Mode {
  NONE,
  LOGIN,
  SIGNUP
}

function logIn(email: string, password: string) {
  console.log(`Log in with user '${email}' and password '${password}'`);
}

function signUp(email: string, password: string) {
  console.log(`Sign up with user '${email}' and password '${password}'`);
}

function LoginRoot() {
  const [mode, setMode] = useState<Mode>(Mode.NONE);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div className='flex m-auto flex-col w-1/2 gap-2'>
      <div className='flex flex-row flex-1 justify-between gap-2'>
        <p className='text-violet-600 hover:cursor-pointer flex-1 text-center'
          style={{ backgroundColor: mode === Mode.LOGIN ? '#d6ced9' : '#ffffff' }}
          onClick={() => setMode(Mode.LOGIN)}>
            Log In
        </p>
        <p className='text-violet-600 hover:cursor-pointer flex-1 text-center'
          style={{ backgroundColor: mode === Mode.SIGNUP ? '#d6ced9' : '#ffffff' }}
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