import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"
import { Auth } from 'firebase/auth';
import axios from "axios";
import routes from '~/routes.json';

interface SignupFormProps {
  onEmailInputChange: (newValue: string) => void
  onPasswordInputChange: (newValue: string) => void
  email: string
  password: string
  auth: Auth
}

function SignupForm(props: SignupFormProps) {
  const [signUp, _, loading] = useCreateUserWithEmailAndPassword(props.auth);
  
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
        onClick={() => { 
          // TODO: Error handling when server fails
          signUp(props.email, props.password)
            .then(result => axios.post(routes.signup, { email: props.email, firebaseId: result?.user.uid }))
          }}
        disabled={loading}
      >
        Sign up
      </button>
    </div>
  )
}

export default SignupForm;