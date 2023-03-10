import { create } from 'zustand'
import ScreensState from '../types/interface/ScreensState';

const useScreens = create<ScreensState>()(

    (set, get) => ({
        screen: 'start',
        previousScreen: 'start',
        setScreenAs: {

            chooseFoodForPreheat: () => set({ 
                previousScreen: get().screen,
                screen: 'choose-food-for-preheat'
            }),

            cookingLeft: () => set({
                previousScreen: get().screen,
                screen: 'cooking-left'
            }),

            isVatFull: () => set({ 
                previousScreen: get().screen,
                screen: 'isVatFull' 
            }),

            preheat: () => set({ 
                previousScreen: get().screen,
                screen: 'preheat' 
            }),

            ready: () => set({ 
                previousScreen: get().screen,
                screen: 'ready' 
            }),

            splash: () => set({ 
                previousScreen: get().screen,
                screen: 'splash' 
            }),

            start: () => set({ 
                previousScreen: get().screen,
                screen: 'start' 
            }),

            selectionLeft: () => set({
                previousScreen: get().screen,
                screen: 'selection-left'
            }),

            selectionRight: () => set({
                previousScreen: get().screen,
                screen: 'selection-right'
            })
        }
    })
    
)

export default useScreens