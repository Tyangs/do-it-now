import { useQuery } from 'react-query';

import { GET_GITHUB_USER } from '@/constants/queryKeys';
import { request } from '@/utils/request';

import { IGitHubUserResponse } from './types';

export const useGitHubUserQuery = () => {
  return useQuery(
    GET_GITHUB_USER,
    async () => {
      const uri = 'https://api.github.com/user';

      const response = await request<IGitHubUserResponse>(uri);
      return response;
    },
    {
      retry: false,
    }
  );
};
