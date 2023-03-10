import { create } from 'zustand'
import SimControls from '../types/interface/SimControlsState'

const useSimControls = create<SimControls>()(

    set => ({
        DrainPanIn: true, 
        setDrainPainInAs: {
            in: () => set({ DrainPanIn: true }),
            out: () => set({ DrainPanIn: false })
        },
        HeatingElementDown: true, 
        setHeatingElementAs: {
            down: () => set({ HeatingElementDown: true }),
            up: () => set({ HeatingElementDown: false })
        },

        BulkSystemEnabled: true, 
        setBulkSystemAs: {
            enabled: () => set({ BulkSystemEnabled: true }),
            disabled: () => set({ BulkSystemEnabled: false })
        },
        
        Disposing: false,
        setDisposingTo: {
            true: () => set({ Disposing: true }),
            false: () => set({ Disposing: false })
        },

        BulkTankFull: false, 
        setBullTankAs: {
            full: () => set({ BulkTankFull: true }),
            notFull: () => set({ BulkTankFull: false })
        }, 

        isSplitVat: true, 
        setVatAs: {
            split: () => set({ isSplitVat: true }),
            notSplit: () => set({ isSplitVat: false })
        },

        JIBFilling: false, 
        setJibAs: {
            filling: () => set({ JIBFilling: true }),
            notFilling: () => set({ JIBFilling: false })
        }, 

        OilTemp: 150, 
        setOilTempTo: (value: number) => set({ OilTemp: value})
    })   
)

export default useSimControls