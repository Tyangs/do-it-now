import { createContext, useState } from 'react';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { DO_IT_NOW_TOKEN_KEY } from '@/constants/storageKey';
import { useGitHubOauthMutation } from '@/queries/oauth/useGitHubOauthMutation';
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

  const searchParams = new URLSearchParams(window.location.search);
  const githubOauthCode = searchParams.get('code');

  const { mutate, isLoading, data: githubResponse } = useGitHubOauthMutation();

  console.log(githubResponse);

  useEffect(() => {
    const storageToken = window.sessionStorage.getItem(DO_IT_NOW_TOKEN_KEY);
    if (storageToken) {
      setToken(storageToken);
    } else if (githubOauthCode) {
      mutate(githubOauthCode, {
        onSuccess: data => {
          window.sessionStorage.setItem(DO_IT_NOW_TOKEN_KEY, data.access_token);
          setToken(data.access_token);
        },
      });
    }
  }, []);

  return (
    <OAuthContent.Provider value={{ token }}>{children}</OAuthContent.Provider>
  );
};

export default OAuthProvider;
