
import { create } from 'zustand'
import DrawersState from '../types/interface/DrawersState'

const useDrawers = create<DrawersState>()(

    set => ({
        MainMenuOpen: false,
        setMainMenuAs: {
            open: () => set({ MainMenuOpen: true }),
            closed: () => set({ MainMenuOpen: false })
        }
    })

)

export default useDrawers