<template>
  <div id="app">
    <router-view/>
    <button @click="changeColor('dark')">深色</button>
    <button @click="changeColor('light')">浅色</button>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'App',
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
<style lang="scss">
  #app {
    @include fontColor(a);
    @include bgColor(b);
    @include getBg(a);
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
