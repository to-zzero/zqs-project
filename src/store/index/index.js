import state from './state'
import mutations from './mutation'
import actions from './action'

const index = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default index
