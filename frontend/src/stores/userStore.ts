import { create } from "zustand"

import { persist, devtools } from "zustand/middleware"

export interface User {
  id?: string
  fullname: string
  email?: string
}

export interface UserActions {
  setUser: (user: User) => void
  logout: () => void
}

export const useUserStore = create<User & UserActions>()(
  devtools(
    persist(
      (set) => ({
        id: "",
        fullname: "",
        email: "",

        setUser: (user) => set(user),
        logout: () => {
          set({ id: "", fullname: "", email: ""})
        },
      }),
      {
        name: "user-storage",
      }
    )
  )
)