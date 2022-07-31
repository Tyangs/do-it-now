import { useQuery } from 'react-query';

import { GET_GITHUB_USER } from '@/constants/queryKeys';
import { oauthStore } from '@/store/oauthStore';
import { getLocationValue } from '@/utils/location';
import { request } from '@/utils/request';

import { IGitHubUserResponse } from './types';
const isLoginPage = getLocationValue('pathname').includes('/login');

export const useGitHubUserQuery = () => {
  const { initUser } = oauthStore();

  return useQuery(
    GET_GITHUB_USER,
    async () => {
      const uri = 'https://api.github.com/user';

      const response = await request<IGitHubUserResponse>(uri);
      return response;
    },
    {
      enabled: !isLoginPage,
      onSuccess: data => {
        initUser(data);
      },
    }
  );
};
