import { useMutation } from 'react-query';

import { request } from '@/utils/request';

interface IGitHubOauthResponse {
  access_token: string;
  scope: string;
  token_type: 'bearer';
}

export const useGitHubOauthMutation = () => {
  return useMutation(async (code: string) => {
    const response = await request<IGitHubOauthResponse>(
      'http://localhost:9001/oauth/github',
      {
        method: 'POST',
        body: {
          code,
        },
      }
    );
    return response;
  });
};
