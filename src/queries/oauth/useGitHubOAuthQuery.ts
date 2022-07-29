import { useQuery } from 'react-query';

import { GET_GITHUB_ACCESS_TOKEN } from '@/constants/queryKeys';
import { request } from '@/utils/request';

export interface IGitHubOAuthResponse {
  access_token: string;
  scope: string;
  token_type: 'bearer';
}

export interface IUseGitHubOAuthParams {
  code?: string | null;
  onSuccess?: (data: IGitHubOAuthResponse) => void;
  onError?: (err: unknown) => void;
}

export const useGitHubOAuthQuery = (params: IUseGitHubOAuthParams) => {
  const { code, onSuccess, onError } = params;

  const uri = `${import.meta.env.VITE_YOUNGS_API}/oauth/github?code=${code}`;

  return useQuery(
    [GET_GITHUB_ACCESS_TOKEN, code],
    async () => {
      const response = await request<IGitHubOAuthResponse>(uri);
      return response;
    },
    {
      enabled: !!code,
      onSuccess: onSuccess,
      onError: onError,
    }
  );
};
