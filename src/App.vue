<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
