import { Image, ImageStyle } from 'react-native'
import useModals from '../../context/useModals'
import { shallow } from 'zustand/shallow'

/** # Preheat Screen
 * 
 * > Returns a preheat screen - screenshot from the f5 simulation app
 * 
 * @returns 
 */
const PreHeatScreen = () => {

    const style: ImageStyle = {

        height: '100%',
        resizeMode: 'contain'
    }

    const [ SimControlModalOpen ] = useModals(
        state => [ state.SimControlModalOpen ],
        shallow
    )

    return (
        <Image 
            source={ require('../../img/screenshots/screens/preheat_screen.png') }
            style={ style }
            blurRadius={SimControlModalOpen ? 3 : 0}
        />
    )
}

export default PreHeatScreen