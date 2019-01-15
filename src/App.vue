<template>
  <div
    class="app"
    id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>
<style lang="scss">
  // #app {
  //   transition: background .5s;
  //   @include fontColor(a);
  //   @include bgColor(b);
  //   @include getBg(mainBg);
  //   background-repeat: no-repeat;
  //   background-position: center;
  // }
  .app {
    min-width: 1248px;
  }
</style>
