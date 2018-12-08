<template>
  <header class="home-header">
    header
    <button @click="changeColor('dark')">深色</button>
    <button @click="changeColor('light')">浅色</button>
  </header>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'home_header',
  data () {
    return {}
  },
  computed: {
    ...mapState({
      theme: state => state.index.theme
    })
  },
  methods: {
    ...mapActions({
      setTheme: 'index/setTheme'
    }),
    changeColor (theme) {
      this.setTheme(theme)
    }
  },
  mounted () {
    this.setTheme()
  }
}
</script>

<style scoped lang="scss">
  .home-header {
    height: $header-h;
  }
</style>
