import { useState } from 'react';
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import fbConfig from '~/client/firebaseConfig';

enum Mode {
  NONE,
  LOGIN,
  SIGNUP
}

function LoginComponent() {
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
          email={email}
          password={password}
          auth={fbConfig.auth}
        />
        : mode === Mode.SIGNUP
        ? <SignupForm
          onEmailInputChange={newValue => setEmail(newValue)}
          onPasswordInputChange={newValue => setPassword(newValue)}
          email={email}
          password={password}
          auth={fbConfig.auth}
        />
        : <></>
      }
    </div>
  )
}

export default LoginComponent