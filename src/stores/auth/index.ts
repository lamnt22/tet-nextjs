import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface AuthStoreState {
  accessToken: string | null;
  setToken: (token: string | any) => void;
}

export const useAuthStore = create<AuthStoreState, any>(
  persist(
    (set, get: any) => ({
      accessToken: null,
      setToken: (token: string | any) => set((state) => state.accessToken = token)
    }),
    {
      name: "auth-store"
    }
  )
);
