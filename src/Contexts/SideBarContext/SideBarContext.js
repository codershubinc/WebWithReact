import { createContext, useContext } from "react";


export const SideBarContext = createContext({
    setWidth: () => { }
})

export const useSideBarContext = SideBarContext.Provider

export default function useSideBarContext() {
    return useContext(SideBarContext)
}