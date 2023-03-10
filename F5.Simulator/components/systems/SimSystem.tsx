import useModals from "../../context/useModals"
import { shallow } from "zustand/shallow"
import SimControlModal from "../modals/SimControlModal"
import SimModalButton from "../buttons/SimModalButton"

/** # Simulation System
 * 
 * > #### SimSystem carries the floating Sim Modal Button component, the corresponding Modal component, and a Zustand useModals hook with shallow reference to SimControlModalOpen [boolean] state.
 * 
 * 
 * **no props required*
 * 
 * @returns 
 */
const SimSystem = () => {

    const [ SimControlModalOpen ] = useModals(
        // DONT DELETE!!! 
        // IT APPEARS UNUSED...
        // BUT THIS HOOK TRIGGERS RERENDERS.
        state => [ state.SimControlModalOpen ],
        shallow
    )

    return (
        <>
            <SimModalButton/>
            <SimControlModal/>        
        </>
    )
}

export default SimSystem