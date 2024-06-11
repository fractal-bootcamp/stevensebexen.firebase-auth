import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import fbConfig from '~/client/firebaseConfig';
import PostWidget from "./PostWidget";

function DashboardComponent () {
  const [user] = useAuthState(fbConfig.auth);
  const [signOut] = useSignOut(fbConfig.auth);

  return (
    <div className='flex flex-col w-1/2'>
      <p className='text-xl'>{user?.displayName || 'Mysterious Dragon'}</p>
      <PostWidget />
      <p className='text-violet-700 hover:cursor-pointer' onClick={() => signOut()}>Logout</p>
    </div>
  );
}

export default DashboardComponent;