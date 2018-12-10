<template>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    :css="false">
    <slot></slot>
  </transition>
</template>

<script>
import Velocity from 'velocity-animate'
export default {
  name: 'my_transition',
  data () {
    return {}
  },
  props: {
    beforeEnter: {
      type: Function,
      default: function (el) {
        console.log('显示动画即将执行')
      }
    },
    enter: {
      type: Function,
      default: function (el, done) {
        Velocity(el, 'stop')
        Velocity(el, {
          scale: [1, 1.2]
        },
        {
          duration: 400,
          easing: [ 0.4, 0.01, 0.165, 0.99 ],
          complete: done
        })
        console.log('显示动画执行中...')
      }
    },
    afterEnter: {
      type: Function,
      default: function (el) {
        console.log('显示动画结束')
      }
    },
    beforeLeave: {
      type: Function,
      default: function (el) {
        console.log('隐藏动画即将执行')
      }
    },
    leave: {
      type: Function,
      default: function (el, done) {
        Velocity(el, 'stop')
        Velocity(el, {
          scale: [1.2, 1]
        },
        {
          duration: 200,
          easing: [ 0.4, 0.01, 0.165, 0.99 ],
          complete: done
        })
        console.log('隐藏动画执行中...')
      }
    },
    afterLeave: {
      type: Function,
      default: function (el) {
        console.log('隐藏动画结束')
      }
    }
  },
  methods: {
  }
}
</script>
