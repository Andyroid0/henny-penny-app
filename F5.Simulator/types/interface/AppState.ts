
interface AppState {
  action: 'choose-food-for-preheat' | 'default'
  setActionAs: {
    chooseFoodForPreheat: () => void,
    default: () => void
  }
}

export default AppState