<template>
  <my-drop-down class="theme-select pd-tb8">
    选择主题
    <ul
      slot="content"
      class="ul-reset theme-select_content">
      <li
        v-for="themeObj in themeList"
        class="pd-tb8 theme-select_item pd-lr32"
        :class="{
          'active': themeObj.theme === theme
        }"
        :key="themeObj.theme"
        @click="changeColor(themeObj.theme)">
        {{themeObj.label}}
      </li>
    </ul>
  </my-drop-down>
</template>

<script>
  import {themeList} from '@/js/constant'
  import {mapState, mapActions} from 'vuex'
  export default {
    name: 'theme_select',
    data () {
      return {
        themeList
      }
    },
    computed: {
      ...mapState({
        theme: state => state.index.theme
      })
    },
    methods: {
      ...mapActions({
        setTheme: 'index/setTheme'
      }),
      changeColor (theme) {
        this.setTheme(theme)
      }
    },
    mounted () {
      this.setTheme()
    }
  }
</script>

<style scoped lang="scss">
  .theme-select {
    .theme-select_content {
      transition: color .3s;
      @include fontColor(a);
    }
    .theme-select_item {
      transition: background .3s;
      &.active {
        @include bgColor(b);
      }
    }
  }
</style>
