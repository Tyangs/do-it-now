import { useContext } from 'react';

import { OAuthContent } from '@/providers/OAuthProvider';

export const useUserInfo = () => {
  const { user } = useContext(OAuthContent);

  return user;
};
