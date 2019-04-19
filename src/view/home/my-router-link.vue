<template>
  <my-drop-down class="my-router-link">
    导航
    <ul
      slot="content"
      class="ul-reset">
      <router-link
        v-for="item in routerList"
        :key="item.path"
        :to="item.path"
        :class="{'active': item.path === activePath}"
        tag="li"
        class="pd-lr24 pd-tb8">
        {{item.label}}
      </router-link>
    </ul>
  </my-drop-down>
</template>

<script>
  export default {
    name: 'my_router_link',
    data () {
      return {
        routerList: [
          {
            path: '/',
            label: '首页'
          },
          {
            path: '/canvas',
            label: 'canvas'
          }
        ]
      }
    },
    computed: {
      activePath () {
        const route = this.$route
        return route.path
      }
    }
  }
</script>

<style scoped lang="scss">
  .active {
    @include fontColor();
  }
</style>
