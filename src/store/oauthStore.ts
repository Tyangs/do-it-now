import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { IGitHubUserResponse } from '@/queries/user';

export interface IUserState {
  user: IGitHubUserResponse | null;
  initUser: (user: IGitHubUserResponse) => void;
}

export const oauthStore = create<IUserState>()(
  devtools(
    persist(set => ({
      user: null,
      initUser: (user: IGitHubUserResponse) => set({ user }),
    }))
  )
);
