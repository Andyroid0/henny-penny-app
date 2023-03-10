import { Image, ImageStyle, View } from 'react-native'
import InvisibleButton from '../buttons/InvisibleButton'
import useScreens from '../../context/useScreens'
import useModals from '../../context/useModals'
import useAppState from '../../context/useAppState'
import { shallow } from 'zustand/shallow'
import { RingAnimation } from '../animations/rings'

/** # Start Screen
 * 
 * > Returns a start screen screenshot from the f5 simulation app
 * 
 * @returns 
 */
const StartScreen = () => {

    const [ setScreenAs ] = useScreens(
        state => [ state.setScreenAs ],
        shallow
    )
    const [ SimControlModalOpen ] = useModals(
        state => [ state.SimControlModalOpen ],
        shallow
    )
    const [ setActionAs ] = useAppState(
        state => [ state.setActionAs ],
        shallow
    )

    const style: ImageStyle = {
        height: '100%',
        resizeMode: 'contain',
    }

    const handlePress = () => {

        setActionAs.default()
        setScreenAs.isVatFull()
    }

    const handleLongPress = () => {

        setActionAs.chooseFoodForPreheat()
        setScreenAs.isVatFull()
    }

    return (
        <View style={{flex: 1, width: '100%', height: '100%' }}>
            <Image
                source={ require('../../img/screenshots/screens/start_screen.png') }
                style={ style }
                blurRadius={SimControlModalOpen ? 3 : 0}
            />
            <RingAnimation size={124} left={449} top={133} />

            <InvisibleButton
                style={{ width: 120, height: 120, left: 450, top: 135 }}
                //debug
                onPress={ () => handlePress() }
                onLongPress={ () => handleLongPress() }
            />


        </View>

    )
}

export default StartScreen
