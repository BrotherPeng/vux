<template>
  <div class="vux-circle q-circle">
    <svg viewBox="0 0 100 100">
      <path :d="pathString" :stroke-linecap="strokeLinecap" :stroke="trailColor" :stroke-width="trailWidth" fill-opacity="0" :style="pathStyleBg"/>
      <path :d="pathString" :stroke-linecap="strokeLinecap" :stroke="strokeColor" :stroke-width="strokeWidth" fill-opacity="0" :style="pathStyle"/>
    </svg>
  </div>
</template>

<script>
/**
* Fork from https://github.com/react-component/progress
* MIT license
*/

export default {
  name: 'q-circle',
  props: {
    strokeWidth: {
      type: Number,
      default: 5
    },
    strokeColor: {
      type: String,
      default: '#8D7A65'
    },
    trailWidth: {
      type: Number,
      default: 5
    },
    trailColor: {
      type: String,
      default: '#EEE3D0'
    },
    percent: {
      type: Number,
      default: 0
    },
    strokeLinecap: {
      type: String,
      default: 'round'
    }
  },
  computed: {
    radius () {
      return 50 - this.strokeWidth / 2
    },
    pathString () {
      return `M 50,50 m 0,-${this.radius}
      a ${this.radius},${this.radius} 0 1 1 0,${2 * this.radius}
      a ${this.radius},${this.radius} 0 1 1 0,-${2 * this.radius}`
    },
    qpercent () {
      return this.percent * 0.75
    },
    len () {
      return Math.PI * 2 * this.radius
    },
    pathStyleBg () {
      return {
        'stroke-dasharray': `${this.len}px ${this.len}px`,
        'stroke-dashoffset': `${((100 - 75) / 100 * this.len)}px`,
        'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
      }
    },
    pathStyle () {
      return {
        'stroke-dasharray': `${this.len}px ${this.len}px`,
        'stroke-dashoffset': `${((100 - this.qpercent) / 100 * this.len)}px`,
        'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
      }
    }
  }
}
</script>

<style lang="less">
.q-circle {
  transform: rotate(-135deg);
}
.vux-circle {
  position: relative;
  width: 100%;
  height: 100%;
}
.vux-circle-content {
  width: 100%;
  text-align: center;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>
