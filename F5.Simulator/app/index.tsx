import { View } from 'react-native'
import { useEffect, useLayoutEffect } from 'react'
import * as ScreenOrientation from 'expo-screen-orientation'
import useScreens from '../context/useScreens'
import useModals from '../context/useModals'
import useSimControls from '../context/useSimControls'
import styles from '../styles'
import StartScreen from '../components/screens/StartScreen'
import ReadyScreen from '../components/screens/ReadyScreen'
import PreHeatScreen from '../components/screens/PreHeatScreen'
import { shallow } from 'zustand/shallow'
import SimModalButton from '../components/buttons/SimModalButton'
import SimControlModal from '../components/modals/SimControlModal'
import IsVatFullScreen from '../components/screens/IsVatFullScreen'
import ChooseFoodForPreheatScreen from '../components/screens/ChooseFoodForPreheatScreen'
import SelectionLeftSideScreen from '../components/screens/SelectionLeftSideScreen'
import SelectionRightSideScreen from '../components/screens/SelectionRightSideScreen'
import CookingLeftSideScreen from '../components/screens/CookingLeftSideScreen'

const index = () => {

    useLayoutEffect( () => {

        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
    }, [])

    const [ SimControlModalOpen ] = useModals(
        // DONT DELETE!!! 
        // IT APPEARS UNUSED...
        // BUT THIS HOOK TRIGGERS RERENDERS.
        state => [ state.SimControlModalOpen ],
        shallow
    )

    const [ OilTemp ] = useSimControls(
        state => [ state.OilTemp ],
        shallow
    )

    const [ previousScreen, screen, setScreenAs ] = useScreens(
        state => [ state.previousScreen, state.screen, state.setScreenAs ],
        shallow
    )

    //OIL TEMP SCREEN LOGIC
    useEffect( () => {
        
        if ( OilTemp > 400 && screen === 'preheat' ) {

            setScreenAs.ready()
        }
        else if ( OilTemp < 400 && screen === 'ready' ) { 

            setScreenAs.preheat()
        }

    })

    return(
        <View style={ styles.container } >

            {
                screen === 'cooking-left'
                ? <CookingLeftSideScreen/>
                : screen === 'choose-food-for-preheat'
                ? <ChooseFoodForPreheatScreen/>
                : screen === 'isVatFull'
                ? <IsVatFullScreen/>
                : screen === 'splash'
                ? <StartScreen/>
                : screen === 'start'
                ? <StartScreen/>
                : screen === 'preheat'
                ? <PreHeatScreen/>
                : screen === 'ready'
                ? <ReadyScreen/>
                : screen === 'selection-left'
                ? <SelectionLeftSideScreen/>
                : screen === 'selection-right'
                ? <SelectionRightSideScreen/>
                : <StartScreen/>
            }

            <SimModalButton/>
            <SimControlModal/>
        </View>
    )
}

export default index