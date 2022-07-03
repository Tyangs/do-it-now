import React from 'react';

import Intro from './components/Intro';
import Layout from './components/Layout/Layout';

const Login = () => {
  return <Layout intro={<Intro />} signIn="" />;
};

export default Login;
