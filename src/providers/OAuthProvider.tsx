import { createContext, useMemo, useState } from 'react';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { DO_IT_NOW_TOKEN_KEY } from '@/constants/storageKey';
import { useGitHubOAuthQuery } from '@/queries/oauth';
export interface IOAuthProviderProps {
  children: React.ReactNode;
}

export interface IOAuthContentProps {
  token: string;
}

export const OAuthContent = createContext<IOAuthContentProps>({ token: '' });

const OAuthProvider = (props: IOAuthProviderProps) => {
  const { children } = props;

  const [token, setToken] = useState<string>('');

  const githubOauthCode = useMemo(() => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get('code');
  }, []);

  const { data: githubResponse, isLoading } =
    useGitHubOAuthQuery(githubOauthCode);

  useEffect(() => {
    const storageToken = window.sessionStorage.getItem(DO_IT_NOW_TOKEN_KEY);
    if (storageToken) {
      setToken(storageToken);
    }
  }, []);

  return (
    <OAuthContent.Provider value={{ token }}>{children}</OAuthContent.Provider>
  );
};

export default OAuthProvider;
