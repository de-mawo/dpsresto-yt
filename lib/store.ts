import { create } from "zustand"

interface SideBarDrawerStore {
    isSideBarOpen: boolean
    onSideBarOpen: () => void
    onSideBarClose: () => void
}

export const useSideBarDrawer = create<SideBarDrawerStore>()((set) => ({
    isSideBarOpen: false,
    onSideBarOpen: () =>  set({isSideBarOpen: true}),
    onSideBarClose: () =>  set({isSideBarOpen: false})
}))

interface LoginModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useLoginModal = create<LoginModalStore>()((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));