import Screens from "../type/Screens";

interface ScreensState {

    screen: Screens
    previousScreen: Screens
    setScreenAs: {
        chooseFoodForPreheat: () => void
        cookingLeft: () => void
        isVatFull: () => void
        preheat: () => void
        ready: () => void
        splash: () => void
        start: () => void
        selectionLeft: () => void
        selectionRight: () => void
    }
}

export default ScreensState