<template>
  <div class="zqs-main min-w">
    <home-header></home-header>
    <!-- <zqs-canvas></zqs-canvas> -->

    <!-- <my-table
      @row-click="click"
      :data-list="dataList">
      <my-table-column
        name="12"
        width="222"
        align="left">
        123
      </my-table-column>
      <my-table-column
        align="left"
        name="123"
        width="200">
        <span>123</span>
        <span slot="th" slot-scope="{name}">
          <span @click="click">{{name}}</span>
        </span>
      </my-table-column>
      <my-table-column
        align="center"
        name="123"
        width="200">
        <span>123</span>
        <span slot="th" slot-scope="{name}">
          <span @click="click">{{name}}</span>
        </span>
      </my-table-column>
      <my-table-column
        align="right"
        name="123"
        width="200">
        <span>123</span>
        <template slot="th" slot-scope="{name}">
          <span @click="click">{{name}}</span>
        </template>
      </my-table-column>
    </my-table> -->
    <section class="min-h">
      <my-transition
        :enter-animate="enterAnimate"
        :leave-animate="leaveAnimate"
        :enter-option="enterOption"
        :leave-option="leaveOption">
        <router-view class="min-h"></router-view>
      </my-transition>
    </section>

    <home-footer></home-footer>
  </div>
</template>

<script>
  import HomeHeader from './home/header'
  import HomeFooter from './home/footer'
  import ZqsCanvas from './canvas.vue'
  export default {
    name: 'zqs_main',
    data () {
      return {
        enterAnimate: {
          opacity: 1
        },
        leaveAnimate: {
          opacity: 0
        },
        enterOption: {
          duration: 300
        },
        leaveOption: {
          duration: 200
        },
        dataList: {
          count: 101,
          page: 1,
          items: [{a: 1}, {a: 2}, {a: 3}]
        }
      }
    },
    components: {
      HomeHeader,
      HomeFooter,
      ZqsCanvas
    },
    methods: {
      click () {
        console.log(213123)
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
