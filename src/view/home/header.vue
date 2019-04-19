<template>
  <header class="home-header">
    <theme-selct></theme-selct>
    <my-router-link></my-router-link>
  </header>
</template>

<script>
  import ThemeSelct from '@/view/home/theme-select'
  import MyRouterLink from '@/view/home/my-router-link'
  export default {
    name: 'home_header',
    components: {
      ThemeSelct,
      MyRouterLink
    }
  }
</script>

<style scoped lang="scss">
  .home-header {
    height: $header-h;
  }
</style>
