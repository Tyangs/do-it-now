import { useQuery } from 'react-query';

import { GET_GITHUB_QUERY_TOKEN } from '@/constants/queryKeys';
import { request } from '@/utils/request';

interface IGitHubOAuthResponse {
  access_token: string;
  scope: string;
  token_type: 'bearer';
}

export const useGitHubOAuthQuery = (code?: string | null) => {
  return useQuery(
    [GET_GITHUB_QUERY_TOKEN, code],
    async () => {
      const response = await request<IGitHubOAuthResponse>(
        `http://localhost:9001/oauth/github?code=${code}`
      );
      return response;
    },
    {
      enabled: !!code,
    }
  );
};
