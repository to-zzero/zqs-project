<template>
  <div class="canvas">
    <canvas ref="canvas" width="400" height="400" id="canvas"></canvas>
  </div>
</template>

<script>
  import imgSrc from '../../static/aa.png'
  export default {
    name: 'my-canvas',
    data () {
      return {
      }
    },
    methods: {
      drawCanvas () {
        let img = new Image()
        let canvas = this.$refs.canvas
        let ctx = canvas.getContext('2d')
        img.src = imgSrc
        img.onload = () => {
          ctx.drawImage(img, 80, 80)

          let imgData = ctx.getImageData(0, 0, 400, 400)

          let ary = []
          let cols = 200
          let rows = 100
          let pos = 0
          // let itemX
          // let itemY
          let data = imgData.data
          const itemWidth = parseInt(canvas.width / cols)
          const itemHeight = parseInt(canvas.height / rows)

          for (let i = 1; i <= cols; i++) {
            for (let j = 1; j <= rows; j++) {
              pos = [(j * itemHeight - 1) * canvas.width + (i * itemWidth - 1)] * 4
              if (data[pos] >= 0) {
                var item = {
                  x: img.x + i * itemWidth + (Math.random() - 0.5) * 20,
                  y: img.y + j * itemHeight + (Math.random() - 0.5) * 20,
                  start: {x: 0, y: 0},
                  fillStyle: `rgba(${data[pos]}, ${data[pos + 1]}, ${data[pos + 2]}, ${data[pos + 3]})`
                }
                ary.push(item)
              }
            }
          }

          ctx.clearRect(0, 0, canvas.width, canvas.height)
          let len = ary.length
          let currentParticle = null

          const fn = () => {
            for (let i = 0; i < len; i++) {
              currentParticle = ary[i]
              ctx.fillStyle = currentParticle.fillStyle
              if (parseInt(currentParticle.start.x) === parseInt(currentParticle.x)) {
                ctx.fillRect(currentParticle.x, currentParticle.y, 1, 1)
              } else {
                currentParticle.start.x++
                currentParticle.start.y++
                ctx.fillRect(currentParticle.start.x, currentParticle.start.y, 1, 1)
              }
            }
          }
          requestAnimationFrame(fn)
          // setInterval(() => {
          //   // ctx.clearRect(0, 0, canvas.width, canvas.height)
          //   fn()
          // }, 100)
        }
      }
    },
    mounted () {
      this.drawCanvas()
    }
  }
</script>

<style scoped lang="scss">
  #canvas {
    background: #000;
  }
</style>
