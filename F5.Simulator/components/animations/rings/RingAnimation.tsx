import { View } from 'react-native'
import { Ring } from './Ring'

type percentage = []

interface RingAnimationProps {
    size: number
    left?: number | string
    right?: number | string
    top?: number | string
    bottom?: number | string
}

export const RingAnimation = ({size, left, right, top, bottom}: RingAnimationProps) => {

    return (
        <View style={{
            position: 'absolute', 
            left: left,
            right: right,
            top: top,
            bottom: bottom
        }}>
            <Ring size={size} delay={0} />
            <Ring size={size} delay={1333} />
            <Ring size={size} delay={2666} />

        </View>
    )
}