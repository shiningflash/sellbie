import { create } from "zustand"
import { persist, devtools } from "zustand/middleware"

export interface GeneralState {
  isLoginOpen: boolean
  isEditProfileOpen: boolean
  selectedProducts: null
  ids: null
  products: null
}

export interface GeneralActions {
  setLoginIsOpen: (isLoginOpen: boolean) => void
  setIsEditProfileOpen: () => void
}

const useGeneralStore = create<GeneralState & GeneralActions>()(
  devtools(
    persist(
      (set) => ({
        isLoginOpen: false,
        isEditProfileOpen: false,
        selectedProducts: null,
        ids: null,
        products: null,
        setLoginIsOpen: (isLoginOpen: boolean) => {
          set({ isLoginOpen })
        },
        setIsEditProfileOpen: () => {
          return set((state) => ({
            isEditProfileOpen: !state.isEditProfileOpen,
          }))
        },
      }),
      {
        name: "general-storage",
      }
    )
  )
)

export default useGeneralStore