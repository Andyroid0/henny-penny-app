import { Modal, Pressable } from "react-native"

interface MainMenuProps {

    visible: boolean
    onRequestClose: () => void
    children?: JSX.Element | JSX.Element[]
}

const DrawerModal = ({ children, visible, onRequestClose}: MainMenuProps) => {

    return(
        <Modal
            animationType='slide'
            transparent={ true }
            visible={ visible }
            onRequestClose={ onRequestClose }
            supportedOrientations={['portrait', 'landscape']}
        >
            <Pressable
                onPress={ () => {
                    if( visible ) {
                        console.log(visible)
                    }
            
                }}//onRequestClose }
                style={{ width: '100%', height: '100%'}}
            />
                { children }
        </Modal>
    )
}

export default DrawerModal