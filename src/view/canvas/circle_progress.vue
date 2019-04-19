<template>
  <div class="circle-progress">
    <canvas
      class="canvas"
      ref="canvas"
      width="600"
      height="400">
    </canvas>
  </div>
</template>

<script>
  export default {
    name: 'circle_progress',
    data () {
      return {
      }
    },
    methods: {
      draw (ctx, canvas, s = 1, e = 0) {
        const {width: cW, height: cH} = canvas
        const PI = Math.PI
        const step = 

        this.drawOval({
          ctx,
          lineWidth: 8,
          x: cW / 2,
          y: cH / 2,
          a: 110,
          b: 100,
          sR: s * PI,
          eR: e * PI
        })
      },
      drawOval ({
        ctx,
        lineWidth = 1,
        color = '#000',
        x,
        y,
        a,
        b,
        sR,
        eR,
        reverse = false
      }) {
        ctx.save()
        const r = Math.max(a, b)
        const scaleX = a / r
        const scaleY = b / r
        ctx.scale(scaleX, scaleY)
        ctx.beginPath()
        ctx.lineCap = 'round'
        ctx.lineWidth = lineWidth
        ctx.strokeStyle = '#000'
        ctx.arc(x / scaleX, y / scaleY, r, sR, eR, reverse)
        ctx.stroke()
        ctx.closePath()
        ctx.restore()

        // ctx.scale(1 / scaleX, 1 / scaleY)
        // ctx.beginPath()
        // ctx.font = '16px 微软雅黑'
        // ctx.lineWidth = 1
        // ctx.textAlign = 'center'
        // ctx.textBaseline = 'middle'
        // ctx.strokeText('123', x, y)
        // ctx.beginPath()
      }
    },
    mounted () {
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')
      this.draw(ctx, canvas)
    }
  }
</script>

<style scoped lang="scss">
  .canvas {
    @include bgColor(a);
  }
  .circle-progress {
    @include bgColor(b);
  }
</style>
