import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Auth Store State Schema
 */
export interface State {
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}

/**
 * Auth Store Actions Schema
 */
export interface Actions {
  setAccessToken: (accessToken: string | null) => void;
  setRefreshToken: (refreshToken: string | null) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  logout: () => void;
}

/**
 * Zustand Persisted Auth Store for email/password authentication
 */
export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      setAccessToken: (accessToken: string | null) =>
        set(() => ({
          accessToken,
        })),
      setIsAuthenticated: (isAuthenticated: boolean) =>
        set(() => ({
          isAuthenticated,
        })),
      setRefreshToken: (refreshToken: string | null) =>
        set(() => ({
          refreshToken,
        })),
      logout: () =>
        set(() => ({
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
        })),
    }),
    {
      name: 'auth-store',
    }
  )
);