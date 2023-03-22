import { Image, ImageStyle, Text, View } from 'react-native'
import InvisibleButton from '../../components/buttons/InvisibleButton'
import useScreens from '../../context/useScreens'
import useModals from '../../context/useModals'
import useAppState from '../../context/useAppState'
import { shallow } from 'zustand/shallow'
import styles from '../../styles'

/** # Cooking on left side Screen
 * 
 * > Returns a cooking left side screen screenshot from the f5 simulation app
 * 
 * @returns 
 */
const CookingLeftSideScreen = () => {

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


    return (
        <View style={ styles.container }>
            <Text>Frank leo</Text>
            <Image
                source={ require('../../img/screenshots/screens/cooking_leftside_screen.png') }
                style={ style }
                blurRadius={SimControlModalOpen ? 3 : 0}
            />
            
            <InvisibleButton
                //SELECTION BUTTON
                style={{ width: 120, height: 120, left: 450, top: 135 }}
                //debug
                onPress={ () => console.log('pressed - from cooking left') }
            />

        </View>

    )
}

export default CookingLeftSideScreen
