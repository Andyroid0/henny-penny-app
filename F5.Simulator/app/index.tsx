import { Image, View } from 'react-native'
import useScreens from '../context/useScreens'
import useModals from '../context/useModals'
import useAppState from '../context/useAppState'
import { shallow } from 'zustand/shallow'
import { RingAnimation } from '../components/animations/rings'
import styles from '../styles'
import InvisibleButton from '../components/buttons/InvisibleButton'
import useDrawers from '../context/useDrawers'

const index = () => {


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
    const [ setMainMenuAs ] = useDrawers(
        state => [ state.setMainMenuAs ],
        shallow
    )

    const handlePress = () => {

        setActionAs.default()
        setScreenAs.isVatFull()
    }

    const handleLongPress = () => {

        setActionAs.chooseFoodForPreheat()
        setScreenAs.isVatFull()
    }

    const handleMenuPress = () => {

        setMainMenuAs.open()
    }

    return (
        <View style={ styles.container }>
            <Image
                source={ require('../img/screenshots/screens/start_screen.png') }
                style={ styles.image_default }
                blurRadius={SimControlModalOpen ? 3 : 0}
            />
            <RingAnimation size={124} left={449} top={133} />

            <InvisibleButton
                style={{ width: 120, height: 120, left: 450, top: 135 }}
                debug
                onPress={ () => handlePress() }
                onLongPress={ () => handleLongPress() }
            />

            <InvisibleButton
                style={{ width: 60, height: 60, left: 100, bottom: 0 }}
                debug
                onPress={ () => handleMenuPress() }
                //onLongPress={ () => handleLongPress() }
            />

            {/* <ProgressAnimation
                //backgroundColor='#808080'
                width='40%'
                height='40%'
            /> */}

        </View>
    )
}

export default index