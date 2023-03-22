import { Image, ImageStyle, View } from 'react-native'
import InvisibleButton from '../../components/buttons/InvisibleButton'
import useScreens from '../../context/useScreens'
import useModals from '../../context/useModals'
import { shallow } from 'zustand/shallow'
import styles from '../../styles'

/** # Choose Food for Preheat Screen
 * 
 * > Returns a food selection screenshot from the f5 simulation app
 * 
 * @returns 
 */
const ChooseFoodForPreheatScreen = () => {

    const [ setScreenAs ] = useScreens(
        state => [ state.setScreenAs ],
        shallow
    )
    const [ SimControlModalOpen ] = useModals(
        state => [ state.SimControlModalOpen ],
        shallow
    )

    const style: ImageStyle = {
        height: '100%',
        resizeMode: 'contain',
    }

    return (
        <View style={ styles.container }>
            <Image
                source={ require('../../img/screenshots/screens/choosefoodforpreheat_screen.png') }
                style={ style }
                blurRadius={SimControlModalOpen ? 3 : 0}
            />
            
            <InvisibleButton
                // FOOD SELECTION BUTTON
                style={{ width: 185, height: 225, left: 235, bottom: 70 }}
                //debug
                onPress={ () => setScreenAs.preheat() }
                //onLongPress={ () => setScreenAs.chooseFoodForPreheat() }
            />

            <InvisibleButton
                // EXIT BUTTON
                style={{ width: 48, height: 48, right: 46, top: 8 }}
                //debug
                onPress={ () => setScreenAs.start() }
                //onLongPress={ () => setScreenAs.chooseFoodForPreheat() }
            />
        </View>

    )
}

export default ChooseFoodForPreheatScreen