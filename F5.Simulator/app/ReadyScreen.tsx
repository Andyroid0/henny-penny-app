import { Image, ImageStyle, View } from 'react-native'
import InvisibleButton from '../components/buttons/InvisibleButton'
import useScreens from '../context/useScreens'
import useModals from '../context/useModals'
import { shallow } from 'zustand/shallow'
import { RingAnimation } from '../components/animations/rings'
import { useRouter } from 'expo-router'
import styles from '../styles'

/** # Ready Screen
 * 
 * > Returns a ready screen screenshot from the f5 simulation app
 * 
 * @returns 
 */
const ReadyScreen = () => {

    const router = useRouter()

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
        resizeMode: 'contain'
    }

    return (
        <View style={styles.container} >
            <View style={{flex: 1, width: '100%', height: '100%' }}>

                <Image 
                    source={ require('../img/screenshots/screens/ready_screen.png') }
                    style={ style }
                    blurRadius={SimControlModalOpen ? 3 : 0}
                />
                <RingAnimation
                    size={122}
                    left={265}
                    top={134}
                />
                <RingAnimation
                    size={122}
                    right={298}
                    top={134}
                />
                <InvisibleButton
                    // COOK LEFT SIDE
                    style={{width: 120, height: 120, left: 265, top: 135}}
                    //debug
                    onPress={ () => router.back() }//setScreenAs.selectionLeft() }
                    //onLongPress={} select recipe
                />
                <InvisibleButton
                    // COOK RIGHT SIDE
                    style={{width: 120, height: 120, right: 175, top: 135}}
                    //debug
                    onPress={ () => setScreenAs.selectionRight() }
                    //onLongPress={} select recipe
                />            
            </View>
        </View>
    )
}

export default ReadyScreen