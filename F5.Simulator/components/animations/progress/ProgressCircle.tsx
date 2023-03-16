import Svg, { Circle } from 'react-native-svg'
import { OpaqueColorValue } from 'react-native'
import { Percent } from '../../../types/type/Percent'
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated'
import { useEffect } from 'react'

interface ProgressCircleProps {

    backgroundColor?: OpaqueColorValue
    backgroundStrokeWidth?: number
    color?: OpaqueColorValue
    strokeWidth?: number
    width: Percent
    height: Percent
}

export const ProgressCircle = ({ 
    backgroundColor, 
    backgroundStrokeWidth, 
    color, 
    strokeWidth, 
    width, 
    height }: ProgressCircleProps) => {


    const AnimatedCircle = Animated.createAnimatedComponent(Circle)

    const BackgroundColor = backgroundColor || '#000000'

    const Color = color || '#ffffff'

    const StrokeWidth = strokeWidth || 15

    const BackgroundStrokeWidth = backgroundStrokeWidth || 30

    const Length = 1000

    const Radius = Length / ( 2 * Math.PI )

    const Progress = useSharedValue(0)

    const AnimatedProps = useAnimatedProps( () => ({
        
        strokeDashoffset: Length * ( 1 - Progress.value )
    }))

    useEffect( () => {

        Progress.value = withTiming( 1, { duration: 2000 } )
    }, [])


    return (
        <Svg>
            <Circle 
                cx={ width } 
                cy={ height } 
                r={ Radius }
                stroke={ BackgroundColor }
                strokeWidth={ BackgroundStrokeWidth }
            />
            <AnimatedCircle 
                cx={ width } 
                cy={ height } 
                r={ Radius }
                stroke={ Color }
                strokeWidth={ StrokeWidth }
                strokeDasharray={ Length }
                animatedProps={AnimatedProps}
            />
        </Svg>
    )
}