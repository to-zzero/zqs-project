<template>
  <!-- 图片统一错误处理 -->
  <img
    @click="$emit('click')"
    :src="src"
    :alt="alt"
    @error="error"
    class="my-img">
</template>

<script>
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
  methods: {
    error (err) {
      console.log(err)
    }
  }
}
</script>
