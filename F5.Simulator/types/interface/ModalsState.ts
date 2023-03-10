interface ModalsState {
    SimControlModalOpen: boolean
    setSimControlModalAs: {
        open: () => void // set open = true
        closed: () => void // set open = false
    }

}

export default ModalsState