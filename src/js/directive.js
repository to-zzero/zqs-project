import Vue from 'vue'
Vue.directive('visible', {
  inserted (el, binding) {
    el.style.visibility = binding.value ? 'visible' : 'hidden'
  },
  componentUpdated (el, binding) {
    el.style.visibility = binding.value ? 'visible' : 'hidden'
  }
})
