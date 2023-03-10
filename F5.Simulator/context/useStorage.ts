import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

const useStorage = create()(
    persist( (set, get) => ({
        }), 
        {
            name: 'henny-penny.demo-app.storage',
            storage: createJSONStorage( () => AsyncStorage )
        }
    )
)