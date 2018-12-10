<template>
  <div class="zqs-main">
    <home-header></home-header>
      <my-img src="/static/theme_img/dark/1.jpg"></my-img>
      <section class="min-h">
        <router-view class="min-h"></router-view>
      </section>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './home/header'
import HomeFooter from './home/footer'
export default {
  name: 'zqs_main',
  data () {
    return {}
  },
  components: {
    HomeHeader,
    HomeFooter
  }
}
</script>

<style scoped lang="scss">
</style>
