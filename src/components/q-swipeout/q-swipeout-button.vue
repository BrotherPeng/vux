<template>
  <button class="vux-q-swipeout-button"
  :class="{'vux-q-swipeout-button-primary': type === 'primary', 'vux-q-swipeout-button-warn': type === 'warn', 'vux-q-swipeout-button-default': type === 'default'}" :style="{width: `${width}px`, backgroundColor: backgroundColor}" @click="onButtonClick" type="button">
    <slot>{{text}}</slot>
  </button>
</template>

<script>
export default {
  name: 'q-swipeout-button',
  props: {
    text: String,
    backgroundColor: String,
    type: String,
    width: {
      type: Number
//      default: 80
    }
  },
  methods: {
    onButtonClick () {
      if (this.$parent.$options._componentTag === 'swipeout-item') {
        this.$parent.onItemClick(this.text)
      }
    }
  }
}
</script>
