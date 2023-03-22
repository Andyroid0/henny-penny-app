import { Image, ImageStyle, View } from 'react-native'
import InvisibleButton from '../../components/buttons/InvisibleButton'
import useScreens from '../../context/useScreens'
import useModals from '../../context/useModals'
import { useRouter } from 'expo-router'
import useAppState from '../../context/useAppState'
import { shallow } from 'zustand/shallow'
import styles from '../../styles'


/** # Is Vat Full Screen
 * 
 * > Returns a screenshot of the isVatFull modal, in this context it's treated as a screen.
 * 
 * @returns 
 */
const IsVatFullScreen = () => {

    const router = useRouter()

    const [ setScreenAs, previousScreen ] = useScreens(
        state => [ state.setScreenAs, state.previousScreen ],
        shallow
    )
    const [ SimControlModalOpen ] = useModals(
        state => [ state.SimControlModalOpen ],
        shallow
    )
    const [ action, setActionAs ] = useAppState(
        state => [ state.action, state.setActionAs ],
        shallow
    )
    const style: ImageStyle = {
        height: '100%',
        resizeMode: 'contain',
    }

    const handleYes = () => {

        action === 'default'
        ? setScreenAs.preheat()
        : action === 'choose-food-for-preheat'
        ? setScreenAs.chooseFoodForPreheat()
        : setScreenAs.preheat()

        if ( action === 'choose-food-for-preheat' ) {
            setActionAs.default()
        }    
    }

    return (
        <View style={ styles.container }>
            <Image
                source={ require('../../img/screenshots/screens/isvatfull_screen.png') }
                style={ style }
                blurRadius={SimControlModalOpen ? 3 : 0}
            />
            
            <InvisibleButton
            // DISMISS BUTTON
                style={{width: 60, height: 60, right: 50, top: 0}}
                //debug
                onPress={ () => router.back() }
                //onLongPress={} select recipe
                
            />
            <InvisibleButton
                // YES BUTTON
                style={{width: 115, height: 115, left: 375, bottom: 100}}
                //debug
                onPress={ () => handleYes() }
                //onLongPress={} select recipe
            />


            <InvisibleButton
                // NO BUTTON
                style={{width: 115, height: 115, right: 285, bottom: 100}}
                //debug
                onPress={ () => setScreenAs.start() }
                //onLongPress={} select recipe
            />
        </View>

    )
}

export default IsVatFullScreen

//