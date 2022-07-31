import { useQuery } from 'react-query';

import { GET_GITHUB_ACCESS_TOKEN } from '@/constants/queryKeys';
import { DO_IT_NOW_TOKEN_KEY } from '@/constants/storageKeys';
import { getLocationSearch } from '@/utils/location';
import { request } from '@/utils/request';
export interface IGitHubOAuthResponse {
  access_token: string;
  scope: string;
  token_type: 'bearer';
}

const gitHubOAuthCode = getLocationSearch('code');

export const useGitHubOAuthQuery = () => {
  const uri = `${
    import.meta.env.VITE_YOUNGS_API
  }/oauth/github?code=${gitHubOAuthCode}`;

  return useQuery(
    [GET_GITHUB_ACCESS_TOKEN, gitHubOAuthCode],
    async () => {
      const response = await request<IGitHubOAuthResponse>(uri);
      return response;
    },
    {
      enabled: !!gitHubOAuthCode,
      onSuccess: data => {
        window.localStorage.setItem(DO_IT_NOW_TOKEN_KEY, data.access_token);
        window.open(import.meta.env.VITE_LOCATION_ORIGIN, '_self');
      },
    }
  );
};
