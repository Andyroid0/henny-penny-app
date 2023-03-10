import useModals from "../../context/useModals"
import useSimControls from "../../context/useSimControls"
import useScreens from "../../context/useScreens"
import { Modal, Pressable, Switch, Text, TextStyle, View, ViewStyle } from 'react-native'
import { shallow } from "zustand/shallow"
import { AntDesign } from '@expo/vector-icons';

/** # Simulation Control Modal
 * > A panel to manipulate the state of the f5 simulation
 * @returns 
 */
const SimControlModal = () => {

    const [ setScreenAs ] = useScreens(
        state => [ state.setScreenAs ],
        shallow
    )
    const [ SimControlModalOpen, setSimControlModalAs ] = useModals(
        state => [ state.SimControlModalOpen, state.setSimControlModalAs ],
        shallow
    )
    const [ OilTemp, setOilTempTo ] = useSimControls(
        state => [ state.OilTemp, state.setOilTempTo ],
        shallow
    )

    const containerStyle: ViewStyle = {

        width: '60%',
        height: '60%',
        backgroundColor: 'lightgray',
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: 48,
        padding: 8
    }

    const headingStyle: TextStyle = {

        fontSize: 32,
        alignSelf: 'center'
    } 

    return(
        <Modal
            animationType='fade'
            transparent={ true }
            visible={ SimControlModalOpen }
            onRequestClose={ () => setSimControlModalAs.closed() }
            supportedOrientations={['portrait', 'landscape']}
        >
            <View style={ containerStyle } >

                <View style={{flexDirection: 'row', margin: 12, justifyContent: 'space-between'}} >
                    <Text style={headingStyle} >Simulation Controls</Text>

                    <View style={{flexDirection: 'row'}}>

                        <Pressable
                            style={{margin: 4}}
                            onPress={ () => {
                                setScreenAs.start()
                                setSimControlModalAs.closed()
                            } }
                        >
                            <AntDesign name="home" size={24} color="black" />
                        </Pressable>

                        <Pressable
                            onPress={ () => setSimControlModalAs.closed() }
                            style={{margin: 4}}
                        >
                            <AntDesign name="close" size={24} color="black" />
                        </Pressable>
                        
                    </View>

                </View>

                <View style={{flexDirection: 'row', margin: 12}} >
                    <Text style={{alignSelf: 'center'}}>450 degrees</Text>
                    <Switch
                        onValueChange={ () => (OilTemp > 400 ? setOilTempTo(150) : setOilTempTo(450)) }
                        value={(OilTemp > 400 ? true : false)}
                    />
                </View>

            </View>
        </Modal>

    )

}

export default SimControlModal