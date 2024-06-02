import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStore {
  isLoggedIn: boolean;
  user: any;

  login: () => void;
  logout: () => void;
  setUser: (state: any) => void;
}
const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      isLoggedIn: false,
      user: {},
      login: () => {
        const userLocalStorage = localStorage.getItem("accessToken");
        if (userLocalStorage) {
          set({ isLoggedIn: true });
        }
      },
      logout: () => {
        set({ isLoggedIn: false });
        localStorage.clear();
      },

      setUser: (state: any) => {
        set({ user: state });
        localStorage.clear();
      },
    }),
    {
      name: "userLoginStatus",
    }
  )
);

export default useAuthStore;
