// import LoginComponent from './LoginComponent';
// import DashboardComponent from './DashboardComponent';
import './index.css';
import DashboardComponent from './DashboardComponent';
import LoginComponent from './LoginComponent';
import { useAuthState } from 'react-firebase-hooks/auth';
import fbConfig from '~/client/firebaseConfig';

function App() {
  const [user] = useAuthState(fbConfig.auth);

  return (
    <>
      <p>Dragons.</p>
      {user
      ? <DashboardComponent />
      : <LoginComponent />}
    </>
  );
}

export default App
