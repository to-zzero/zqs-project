<template>
  <!-- 图片统一错误处理 -->
  <img
    @click="$emit('click')"
    :src="realSrc"
    :alt="alt"
    @error="error"
    class="my-img">
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'my-img',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: [String, Number],
      default: 'zqs'
    }
  },
  computed: {
    ...mapState({
      imgStaticSrc: state => `/static/theme_img/${state.index.theme}`
    }),
    realSrc () {
      const src = this.src
      const reg = /\/static\/theme_img\/[a-zA-Z]+\//gi
      if (reg.test(src)) {
        const matchPart = src.match(reg)[0]
        const result = src.replace(matchPart, '/')
        return `${this.imgStaticSrc}${result}`
      } else {
        return src
      }
    }
  },
  methods: {
    error (err) {
      console.log(err)
    }
  }
}
</script>
