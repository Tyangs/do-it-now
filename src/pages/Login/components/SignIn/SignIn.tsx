import './SignIn.scss';

import { ReactComponent as GitHubIcon } from '@/assets/svgs/github.svg';
import { ReactComponent as GoogleIcon } from '@/assets/svgs/google.svg';
import { GITHUB_LOGIN_URL } from '@/constants/url';

const SignIn = () => {
  const handleGitHubLogin = () => {
    window.open(GITHUB_LOGIN_URL, '_self');
  };

  return (
    <div className="login-sign-in">
      <p className="login-sign-in__title">
        Select the account you'd like to sign in with:
      </p>
      <div className="login-sign-in__group">
        <button className="login-sign-in__button" onClick={handleGitHubLogin}>
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
