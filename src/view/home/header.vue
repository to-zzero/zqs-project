<template>
  <header class="home-header">
    <theme-selct></theme-selct>
  </header>
</template>

<script>
  import ThemeSelct from '@/view/home/theme-select'
  export default {
    name: 'home_header',
    components: {
      ThemeSelct
    }
  }
</script>

<style scoped lang="scss">
  .home-header {
    height: $header-h;
  }
</style>
