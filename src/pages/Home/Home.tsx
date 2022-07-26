import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useUserInfo } from '@/hooks/useUserInfo';

const Home = () => {
  const navigate = useNavigate();

  const user = useUserInfo();

  return (
    <div>
      <h1>{user?.login}</h1>
      <h1>{user?.name}</h1>
      <h1>{user?.bio}</h1>
      <button
        onClick={() => {
          navigate('/login');
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Home;
