interface DrawersState {
    MainMenuOpen: boolean
    setMainMenuAs: {
        open: () => void
        closed: () => void
    }
}

export default DrawersState