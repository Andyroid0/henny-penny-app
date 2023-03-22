import Svg, { Circle } from 'react-native-svg'
import { Percent } from '../../../types/type/Percent'
import Animated, { SharedValue, useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated'
import { useEffect, useState } from 'react'
import { ColorValue, View } from 'react-native'

interface ProgressCircleProps {

    backgroundColor?: ColorValue
    backgroundStrokeWidth?: number
    color?: ColorValue
    strokeWidth?: number
    width: Percent
    height: Percent
    progress?: number
    variant?: 'dictated' | 'once' | 'looped' 
}

export const ProgressCircle = ({ 
    backgroundColor, 
    backgroundStrokeWidth,
    color, 
    strokeWidth, 
    width, 
    height,
    progress,
    variant }: ProgressCircleProps) => {


    const initProgress = () => (

        Variant === 'dictated'
        ? useSharedValue( progress )
        : useSharedValue( 0 )
    )


    const [Progress, setProgress] = useState<SharedValue<number>>(initProgress())


    const AnimatedCircle = Animated.createAnimatedComponent(Circle)

    const BackgroundColor = backgroundColor || '#000000'

    const Color = color || '#ffffff'

    const StrokeWidth = strokeWidth || 15

    const BackgroundStrokeWidth = backgroundStrokeWidth || 30

    const Length = 1000

    const Radius = Length / ( 2 * Math.PI )

    const Variant = variant || 'once'

    const AnimatedProps = useAnimatedProps( () => ({
        
        strokeDashoffset: Length * ( 1 - Progress.value )
    }))

    useEffect( () => {

        if ( Variant === 'once' ) {

            Progress.value = withTiming( 1, { duration: 2000 } )
        }
        
    }, [])


    return (
            <Svg style={{left: '20%'}} >
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
                    strokeLinecap='round'
                />
            </Svg>
    )
}