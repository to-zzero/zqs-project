import * as types from './mutation_type'
const actions = {
  setTheme ({commit}, theme) {
    commit(types.SET_THEME, theme)
  }
}

export default actions
