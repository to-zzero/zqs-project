<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import {addUser, queryId} from './http/api'
export default {
  name: 'App'
}
</script>
<style lang="scss">
  #app {
    transition: background .5s;
    @include fontColor(a);
    @include bgColor(b);
    @include getBg(mainBg);
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
