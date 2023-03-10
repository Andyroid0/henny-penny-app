import { View } from 'react-native'
import { useEffect, useLayoutEffect } from 'react'
import * as ScreenOrientation from 'expo-screen-orientation'
import useScreens from '../context/useScreens'
import useSimControls from '../context/useSimControls'
import styles from '../styles'
import StartScreen from '../components/screens/StartScreen'
import ReadyScreen from '../components/screens/ReadyScreen'
import PreHeatScreen from '../components/screens/PreHeatScreen'
import { shallow } from 'zustand/shallow'
import IsVatFullScreen from '../components/screens/IsVatFullScreen'
import ChooseFoodForPreheatScreen from '../components/screens/ChooseFoodForPreheatScreen'
import SelectionLeftSideScreen from '../components/screens/SelectionLeftSideScreen'
import SelectionRightSideScreen from '../components/screens/SelectionRightSideScreen'
import CookingLeftSideScreen from '../components/screens/CookingLeftSideScreen'
import SimSystem from '../components/systems/SimSystem'

const index = () => {

    useLayoutEffect( () => {

        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
    }, [])

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

            <SimSystem/>
        </View>
    )
}

export default index