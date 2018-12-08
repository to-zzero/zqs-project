<template>
  <div id="app">
    <router-view/>
    <button @click="changeColor('dark')">深色</button>
    <button @click="changeColor('light')">浅色</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    changeColor (theme) {
      let html = document.documentElement || document.body
      html.setAttribute('data-theme', theme)
    }
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
