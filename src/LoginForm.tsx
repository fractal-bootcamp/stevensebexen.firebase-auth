interface LoginFormProps {
  onEmailInputChange: (newValue: string) => void
  onPasswordInputChange: (newValue: string) => void
  onSubmit: () => void
  email: string
  password: string
}

function LoginForm(props: LoginFormProps) {
  return (
    <div className='flex flex-row flex-1 justify-between gap-4'>
      <input
        className='flex-1 basis-2/5 p-1'
        name='email'
        placeholder='Email' 
        value={props.email}
        onChange={e => props.onEmailInputChange(e.target.value)}
      />
      <input
        className='flex-1 basis-2/5 p-1'
        name='password'
        placeholder='Password'
        value={props.password}
        onChange={e => props.onPasswordInputChange(e.target.value)}
      />
      <button
        className='flex-1 basis-1/5 rounded-md border border-indigo-900'
        onClick={() => props.onSubmit()}
      >
        Log in
      </button>
    </div>
  )
}

export default LoginForm;