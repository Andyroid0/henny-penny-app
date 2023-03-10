/** # Simulation Controls
 * ---
 * > **State Slice that contains states and setters for manipulating the f5 simulation.**
 * 
 * > *Each property contains a state and a setAs object
 * 
 * ---
 * @prop >### [DrainPanIn]
 * > #### state - boolean
 * 
 * > #### setAs
 * >> in()
 * 
 * >> out()
 * 
 * @prop [HeatingElementDown]
 * 
 * # ToBeContinued...
 */
interface SimControlsState {

    DrainPanIn: boolean
    setDrainPainInAs:{
        in: () => void
        out: () => void
    }

    HeatingElementDown: boolean
    setHeatingElementAs: {

        down: () => void
        up: () => void
    }

    BulkSystemEnabled: boolean
    setBulkSystemAs: {

        enabled: () => void
        disabled: () => void 
    }

    Disposing: boolean
    setDisposingTo: {
        true: () => void
        false: () => void
    }
    
    BulkTankFull: boolean // original Sim field was notfull
    setBullTankAs: {
        full: () => void,
        notFull: () => void
    }

    isSplitVat: boolean // original Sim field is SplitVat 
    setVatAs: {
        split: () => void // set true
        notSplit: () => void // set false
    }

    JIBFilling: boolean // originial Sim field is JIBFill
    setJibAs: {
        filling: () => void // true
        notFilling: () => void // false
    } // JIBFill true, JIBFill Alert 'Complete' - set JIBFill back to false

    OilTemp: number
    setOilTempTo: (value: number) => void
}

export default SimControlsState