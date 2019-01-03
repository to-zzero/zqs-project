<template>
  <transition
    @before-enter="beforeEnter"
    @enter="enter">
    <div class="main-img_wrap">
      <div
        :style="{'height': `${innerHeight}px`}"
        class="main-img"></div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'main_img',
    props: {
      height: {
        type: Number
      },
      innerHeight: {
        type: Number
      }
    },
    data () {
      return {
      }
    },
    methods: {
      beforeEnter (el) {
        el.style.height = 0
      },
      enter (el, done) {
        console.log(this.height ? `${this.height}px` : 'calc(100vh - 50px)')
        el.style.transition = 'height .3s'
        el.style.height = this.height ? `${this.height}px` : 'calc(100vh - 50px)'
        done()
      }
    }
  }
</script>

<style scoped lang="scss">
  .main-img_wrap {
    position: relative;
    overflow: hidden;
  }
  .main-img {
    width: 100%;
    height: calc(100vh - #{$header-h});
    @include getBg(mainBg);
    transform-origin: center;
    position: absolute;
    left: 0;
    top: 0;
  }
  .slide-enter-active, .slide-leave-active {
    transition: height .5s;
  }
  .slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
    height: 0;
  }
</style>
