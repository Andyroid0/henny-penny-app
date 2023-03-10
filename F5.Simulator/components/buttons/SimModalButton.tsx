import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, ViewStyle } from 'react-native';
import useModals from '../../context/useModals';
import { shallow } from 'zustand/shallow';

const SimModalButton = () => {

    const [ SimControlModalOpen, setSimControlModalAs ] = useModals(
        state => [ state.SimControlModalOpen, state.setSimControlModalAs ],
        shallow
    )

    const handlePress = () => (

        SimControlModalOpen === true // is open
        ? setSimControlModalAs.closed()
        : setSimControlModalAs.open()
    )

    const style: ViewStyle = {

        position: 'absolute',
        right: 48,
        bottom: 24
    }

    return (
        <Pressable
            onPress={ () => handlePress() }
            style={style}
        >
            <MaterialCommunityIcons 
                name="state-machine" 
                size={32} 
                color="white" 
            />   
        </Pressable>     
    )
}

export default SimModalButton
