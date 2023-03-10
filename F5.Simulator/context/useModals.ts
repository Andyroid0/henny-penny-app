import ModalsState from "../types/interface/ModalsState";
import { create } from 'zustand'

const useModals = create<ModalsState>()(

    set => ({
        SimControlModalOpen: false,
        setSimControlModalAs: {
            open: () => set({ SimControlModalOpen: true }),
            closed: () => set({ SimControlModalOpen: false })
        }
    })
)

export default useModals