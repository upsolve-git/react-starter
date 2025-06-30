import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * User Schema
 */
export interface User {
  firstName: string;
  lastName: string;
  email: string;
}

/**
 * User Store Schema
 */

export interface Store {
  user: User | null;
  setUser: (user: User | null) => void;
}

/**
 * Zustand Persisted User Store
 */
export const useUserStore = create(
  persist<Store>(
    (set) => ({
      user: null,
      setUser: (user: User | null) =>
        set(() => ({
          user,
        })),
    }),
    {
      name: 'user-store',
    }
  )
);