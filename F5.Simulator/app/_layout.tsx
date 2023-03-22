import SimSystem from "../components/systems/SimSystem"
import { useEffect, useLayoutEffect, useState } from "react"
import useSimControls from "../context/useSimControls"
import useScreens from "../context/useScreens"
import { usePathname, useRouter, useRootNavigation, useRootNavigationState } from "expo-router"
import { shallow } from "zustand/shallow"
import { Slot } from "expo-router"
import * as ScreenOrientation from 'expo-screen-orientation'
import MainMenuDrawer from "../components/drawers/MainMenuDrawer"

const Layout = () => {



    const [ screen, setScreenAs ] = useScreens(
        state => [ state.screen, state.setScreenAs ],
        shallow
    )
    const [ OilTemp ] = useSimControls(
        state => [ state.OilTemp ],
        shallow
    )

    const router = useRouter()

    useLayoutEffect( () => {

        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
    }, [])

    useEffect( () => {


        switch( screen ) {

            case 'cooking-left':
                return router.push('/screens/cooking-left-side')

            case 'start':    
                return router.push('/')

            case 'ready':
                return router.push('/screens/ready')

            case 'choose-food-for-preheat':
                return router.push('/screens/choose-food-for-preheat')

            case 'isVatFull':
                return router.push('/modals/is-vat-full')  
                
            case 'preheat':
                return router.push('/screens/preheat')

            case 'splash':
                return router.push('/')

            case 'selection-left':
                return router.push('/screens/selection-left-side')

            case 'selection-right':
                return router.push('/screens/selection-right-side')

        }

    }, [screen])

    //OIL TEMP SCREEN LOGIC
    useEffect( () => {
    
        if ( OilTemp > 400 && screen === 'preheat' ) {

            setScreenAs.ready()
        }
        else if ( OilTemp < 400 && screen === 'ready' ) { 

            setScreenAs.preheat()
        }

    })

    return (
        <>
            <Slot/>
            <SimSystem/>
            <MainMenuDrawer/>
        </>
    )
}

export default Layout