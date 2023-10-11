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