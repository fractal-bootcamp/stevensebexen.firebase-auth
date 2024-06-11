import { Auth } from "firebase/auth"
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"

interface LoginFormProps {
  onEmailInputChange: (newValue: string) => void
  onPasswordInputChange: (newValue: string) => void
  email: string
  password: string
  auth: Auth
}

function LoginForm(props: LoginFormProps) {
  const [signIn, _, loading] = useSignInWithEmailAndPassword(props.auth);

  return (
    <div className='flex flex-row flex-1 justify-between gap-4'>
      <input
        className='flex-1 basis-1/2 p-1 min-w-0'
        name='email'
        placeholder='Email' 
        value={props.email}
        onChange={e => props.onEmailInputChange(e.target.value)}
      />
      <input
        className='flex-1 basis-1/2 p-1 min-w-0'
        name='password'
        placeholder='Password'
        value={props.password}
        onChange={e => props.onPasswordInputChange(e.target.value)}
      />
      <button
        className='flex-1 basis-24 rounded-md border border-indigo-900 disabled:text-purple-300'
        onClick={() => signIn(props.email, props.password)}
        disabled={loading}
      >
        Log in
      </button>
    </div>
  )
}

export default LoginForm;