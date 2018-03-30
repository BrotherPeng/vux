<template>
    <x-dialog v-model="isShow" class="q-dialog">
      <div class="vux-box">
        <slot></slot>
      </div>
      <div @click="hide" class="vux-close"></div>
      <x-button :type="type" class="vux-ok" @click.native="ok">{{btnText}}</x-button>
    </x-dialog>
</template>

<script>
import XDialog from '../x-dialog'
import XButton from '../x-button'

export default {
  name: 'q-dialog',
  components: {
    XDialog,
    XButton
  },
  model: {
    prop: 'initialShow',
    event: 'change'
  },
  props: {
    initialShow: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary'
    },
    btnText: {
      type: String,
      default: '知道了'
    }
  },
  computed: {
  },
  watch: {
    initialShow (val) {
      this.isShow = val
    },
    isShow (val) {
      this.$emit(val ? 'on-show' : 'on-hide')
      this.$emit('change', val)
    }
  },
  methods: {
    ok () {
      this.$emit('ok')
      this.hide()
    },
    hide () {
      this.isShow = false
    },
    show () {
      this.isShow = true
    }
  },
  data () {
    return {
      isShow: this.initialShow
    }
  }
}
</script>

<style lang="less">

.q-dialog {
  .weui-dialog{
    width:580px;
    height:750px;
    background:rgba(255,255,255,1);
    box-shadow: 0px 6px 10px -2px rgba(0,0,0,0.5);
    border-radius: 20px ;
    max-width:580px;
    overflow:visible;
  }
  .dialog-title {
    line-height: 30px;
    color: #666;
  }
  .vux-box {
    width:100%;
    height:100%;
    border-radius: 20px ;
    overflow:hidden;
  }
  .vux-ok {
    width:280px;
    height:80px;
    position: absolute;
    bottom:-40px;
    left:150px;
    box-shadow: 0px 22px 16px -4px rgba(0,0,0,0.5);
    font-size:28px;
    font-family:PingFangSC-Medium;
    color:rgba(255,255,255,1);
    line-height:40px;
  }
  .vux-close {
    top: 29px;
    right: 36px;
    position: absolute;
    display: inline-block;
    vertical-align: middle;
    color: #999;
    width: 25px;
    height: 25px;
    z-index: 10000;
    &:before, &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 11px;
      width: 24px;
      height: 1px;
      background-color: currentColor;
      transform: rotate(-45deg);
    }
    &:after {
      transform: rotate(45deg);
    }
  }

}
</style>
