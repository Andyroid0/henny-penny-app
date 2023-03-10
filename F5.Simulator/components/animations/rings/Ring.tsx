import { ViewStyle } from 'react-native/types'
import Animated, { 

    interpolate, 
    useAnimatedStyle, 
    useSharedValue,
    withDelay,
    withRepeat,
    withTiming

} from 'react-native-reanimated'
import { useEffect } from 'react'

export const Ring = ({delay, size}) => {

    const style: ViewStyle = {

        position: 'absolute',
        width: size,
        height: size,
        borderRadius: 1000,
        borderWidth: 4,
        borderColor: 'white'
    }

    const ring = useSharedValue(0)

    const anim = useAnimatedStyle( () => {

        return {
            opacity: 0.4 - ring.value,
            transform: [{
                scale: interpolate( ring.value, [0, 1.25], [1, 2.5]),
            }],
        }
    })

    useEffect( () => {

        ring.value = withDelay( 
            delay, 
            withRepeat( 
                withTiming(
                    1,
                    {
                        duration: 4000
                    }
                ),
                -1
            )
        )
    }, [])

    return (

        <Animated.View style={[style, anim]} />
    )

}