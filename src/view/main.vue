<template>
  <div class="zqs-main min-w pd-l48">
    <home-header></home-header>

    <my-drop-down>
      123123
      <div slot="content">
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>2222</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
      </div>
    </my-drop-down>
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
