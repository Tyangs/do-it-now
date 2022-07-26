import { createContext, useMemo, useState } from 'react';
import React, { useEffect } from 'react';

import { DO_IT_NOW_TOKEN_KEY } from '@/constants/storageKey';
import { IGitHubOAuthResponse, useGitHubOAuthQuery } from '@/queries/oauth';
import { IGitHubUserResponse } from '@/queries/user/types';
import { useGitHubUserQuery } from '@/queries/user/userGitHubUserQuery';
export interface IOAuthProviderProps {
  children: React.ReactNode;
}

export interface IOAuthContentProps {
  user?: IGitHubUserResponse;
}

export const OAuthContent = createContext<IOAuthContentProps>({});

const OAuthProvider = (props: IOAuthProviderProps) => {
  const { children } = props;

  const { data: userInfo, isLoading: isUserLoading } = useGitHubUserQuery();

  const githubOauthCode = useMemo(() => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get('code');
  }, []);

  const handleGetTokenSuccess = (data: IGitHubOAuthResponse) => {
    window.localStorage.setItem(DO_IT_NOW_TOKEN_KEY, data.access_token);
    window.open(window.location.origin, '_self');
  };

  useGitHubOAuthQuery({
    code: githubOauthCode,
    onSuccess: handleGetTokenSuccess,
  });

  const { user } = useMemo(
    () => ({
      user: userInfo,
    }),
    [userInfo]
  );

  return (
    <OAuthContent.Provider value={{ user }}>{children}</OAuthContent.Provider>
  );
};

export default OAuthProvider;
