import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserData {
  email: string | null;
  firstName?: string | null; // Optional if your app uses it
  lastName?: string | null;
}

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  user: UserData | null;
  error: string | null;
}

interface AuthActions {
  setAccessToken: (token: string | null) => void;
  setUser: (user: UserData | null) => void;
  setError: (error: string | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      user: null,
      error: null,

      // Setters
      setAccessToken: (token) => set({ accessToken: token, isAuthenticated: !!token }),
      setUser: (user) => set({ user }),
      setError: (error) => set({ error }),
      
      // Logout clears everything
      logout: () => set({ 
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
        user: null,
        error: null
      }),
    }),
    {
      name: 'auth-store',
    }
  )
);