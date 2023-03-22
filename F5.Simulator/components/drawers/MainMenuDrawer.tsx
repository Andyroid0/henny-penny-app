import DrawerModal from "../modals/DrawerModal"
import useDrawers from "../../context/useDrawers"
import { shallow } from "zustand/shallow"
import { Image, View, ImageStyle } from "react-native"
import styles from "../../styles"
import useModals from "../../context/useModals"

const MainMenuDrawer = () => {

    const [ MainMenuOpen, setMainMenuAs ] = useDrawers(
        state => [ state.MainMenuOpen, state.setMainMenuAs ],
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

    return(
        <DrawerModal
            visible={ MainMenuOpen }
            onRequestClose={ () => setMainMenuAs.closed() }
        >
            <View>
                <Image
                    style={ style }
                    source={ require('../../img/screenshots/drawers/main_menu.png') }
                    blurRadius={ SimControlModalOpen ? 3 : 0 }
                />
            </View>

        </DrawerModal>
    )
}

export default MainMenuDrawer