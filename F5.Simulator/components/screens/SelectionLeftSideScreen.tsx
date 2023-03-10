import { Image, ImageStyle, View } from 'react-native'
import InvisibleButton from '../buttons/InvisibleButton'
import useScreens from '../../context/useScreens'
import useModals from '../../context/useModals'
import useAppState from '../../context/useAppState'
import { shallow } from 'zustand/shallow'

/** # Selection for Left Side Screen
 * 
 * > Returns a left side selection screen screenshot from the f5 simulation app
 * 
 * @returns 
 */
const SelectionLeftSideScreen = () => {

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
        <View style={{flex: 1, width: '100%', height: '100%' }}>
            <Image
                source={ require('../../img/screenshots/screens/selection_leftside_screen.png') }
                style={ style }
                blurRadius={SimControlModalOpen ? 3 : 0}
            />
            
            <InvisibleButton
                //SELECTION BUTTON
                style={{ width: 180, height: 250, left: 240, top: 135 }}
                //debug
                onPress={ () => setScreenAs.cookingLeft() }
            />

            <InvisibleButton
                // DISMISS BUTTON
                style={{ width: 60, height: 60, right: 38, top: 4 }}
                //debug
                onPress={ () => setScreenAs.ready() }
            />
        </View>

    )
}

export default SelectionLeftSideScreen
