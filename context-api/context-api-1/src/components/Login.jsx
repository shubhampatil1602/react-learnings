import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className='flex flex-col w-96 p-3 mx-auto my-3 border-2'>
      <h2 className='text-2xl m-2 p-2 text-center'>Login</h2>
      <input
        type='text'
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='border-2 p-2 m-2 outline-none'
      />
      <input
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'
        value={password}
        className='border-2 p-2 m-2 outline-none'
      />
      <button className='border-2 p-2 m-2 bg-gray-200' onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Login;
