import './SignIn.scss';

import React from 'react';

import { ReactComponent as GitHubIcon } from '@/assets/svgs/github.svg';
import { ReactComponent as GoogleIcon } from '@/assets/svgs/google.svg';

const SignIn = () => {
  return (
    <div className="login-sign-in">
      <p className="login-sign-in__title">Select the account you'd like to sign in with:</p>
      <div className="login-sign-in__group">
        <button className="login-sign-in__button">
          <GitHubIcon />
          GitHub
        </button>
        <button className="login-sign-in__button">
          <GoogleIcon />
          Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
