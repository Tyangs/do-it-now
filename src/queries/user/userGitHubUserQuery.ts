import { useQuery } from 'react-query';

import { GET_GITHUB_USER } from '@/constants/queryKeys';
import { request } from '@/utils/request';

import { IGitHubUserResponse, IUseGitHubUserParams } from './types';

export const useGitHubUserQuery = (params?: IUseGitHubUserParams) => {
  const { enabled = false } = params ?? {};

  return useQuery(
    GET_GITHUB_USER,
    async () => {
      const uri = 'https://api.github.com/user';

      const response = await request<IGitHubUserResponse>(uri);
      return response;
    },
    {
      enabled,
    }
  );
};
