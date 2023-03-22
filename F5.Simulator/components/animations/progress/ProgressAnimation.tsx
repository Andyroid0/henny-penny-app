import { ProgressCircle } from "./ProgressCircle"
import { Text, View, useWindowDimensions } from "react-native"
import { Percent } from "../../../types/type/Percent"

interface ProgressAnimationProps {

    width: Percent
    height: Percent
    left?: Percent
    right?: Percent
    top?: Percent
    bottom?: Percent,
    children?: JSX.Element
}

export const ProgressAnimation = ({
    width, 
    height, 
    left,
    right,
    top,
    bottom,
    children }: ProgressAnimationProps) => {


    const toFloat = ( value: Percent ): number => {

        const asIntString = value.substring(0, (value.length - 1) )

        const len = asIntString.length

        if( len === 3 && asIntString === '100') {

            return 1
        }

        else switch(len) {

            case 0:
                return

            case 1:
                return Number.parseFloat(`0.0${asIntString}`) 

            case 2:
                return Number.parseFloat(`0.${asIntString}`)

            default:
                throw Error('Invalid percentage provided to ProgressAnimation Component (pssst... it\'s Likely the height prop!)')
        }

    }

    const Height = useWindowDimensions().width * toFloat(height)

    return (


        <View style={{ top: 30, borderColor: 'green', borderWidth: 4, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'white',}} > frank pollack </Text>
            <ProgressCircle
                width={ width }
                height={ height }
            /> 
        </View>

    )
}