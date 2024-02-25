import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);
  return !user ? (
    <div className='text-2xl text-center'>Please Login</div>
  ) : (
    <div className='text-2xl text-center'>Welcome {user.username}</div>
  );
};

export default Profile;
