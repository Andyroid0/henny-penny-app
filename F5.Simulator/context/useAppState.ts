import { create } from 'zustand'
import AppState from '../types/interface/AppState'

const useAppState = create<AppState>()(

    (set, get) => ({

        action: 'default',
        setActionAs: {
            
            chooseFoodForPreheat: () => set({ action: 'choose-food-for-preheat' }),
            default: () => set({ action: 'default' })
        }
    })
)

export default useAppState