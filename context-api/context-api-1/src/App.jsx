import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <div className='h-screen flex flex-col justify-center gap-7 items-center'>
        <Profile />
        <Login />
      </div>
    </UserContextProvider>
  );
}

export default App;
