import { Pressable, ViewStyle } from "react-native"


interface InvisibleButtonProps {

    style?: ViewStyle
    debug?: boolean
    onLongPress?: () => void
    onPress?: () => void

}

const InvisibleButton = ({ 
    style, 
    debug,
    onPress,
    onLongPress
}: InvisibleButtonProps) => {

    const constantStyle: ViewStyle = {
        borderColor: debug ? 'red' : 'rgba(0,0,0,0)',
        borderWidth: debug ? 2 : 0,
        borderRadius: 8,
        position: 'absolute'
    }

    return (
        <Pressable 
            style={[constantStyle, style]}
            onPress={onPress}
            onLongPress={onLongPress}
        />
    )
}

export default InvisibleButton