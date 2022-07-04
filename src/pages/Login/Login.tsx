import React from 'react';

import Intro from './components/Intro';
import Layout from './components/Layout';
import SignIn from './components/SignIn';

const Login = () => {
  return <Layout intro={<Intro />} signIn={<SignIn />} />;
};

export default Login;
