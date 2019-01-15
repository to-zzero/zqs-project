import * as types from './mutation_type'
import {getStorage, setStorage} from '../../js/until'
import {themeList} from '../../js/constant'

const defaultTheme = themeList[0].theme

function setTheme (theme = defaultTheme) {
  setStorage('theme', theme)
  let html = document.documentElement || document.body
  html.setAttribute('data-theme', theme)
}

const mutations = {
  [types.SET_STATE] (state, data) {
    state[data.key] = state[data.value]
  },
  [types.SET_THEME] (state, theme) {
    const localTheme = getStorage('theme')

    if (localTheme && !theme) {
      state.theme = localTheme
      setTheme(localTheme)
    } else if (!localTheme && !theme) {
      state.theme = defaultTheme
      setTheme(theme)
    } else {
      state.theme = theme
      setTheme(theme)
    }
  }
}

export default mutations
