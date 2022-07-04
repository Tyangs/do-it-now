import './Layout.scss';

import React from 'react';

export interface ILayoutProps {
  intro: React.ReactNode;
  signIn: React.ReactNode;
}

const Layout = (props: ILayoutProps) => {
  const { intro, signIn } = props;

  return (
    <div className="login-layout">
      <div className="login-layout__intro-wrapper">{intro}</div>
      <div className="login-layout__sign-in-wrapper">{signIn}</div>
    </div>
  );
};

export default Layout;
