<template>
    <popup v-model="isShow" class="q-popup">
        <div class="main"></div>
        <div class="close" @click="hide"></div>
    </popup>
</template>

<script>
import Popup from '../popup'

export default {
  name: 'q-popup',
  components: {
    Popup
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
      default: 'success',
      validator: function (val) {
        return val === 'success' || val === 'fail' || val === 'nsf'
      }
    }
  },
  computed: {
    iconType: function () {
      return this.type === 'fail' ? 'ios-close-outline' : this.type === 'nsf' ? 'ios-information-outline' : 'ios-checkmark-outline'
    },
    classObject: function () {
      return [
        'q-dialog-pay'
      ]
    },
    mainClassObject: function () {
      return [
        'main',
        this.type === 'fail' ? 'main-fail' : this.type === 'nsf' ? 'main-nsf' : 'main-success'
      ]
    },
    dialogType: function () {
      return this.type === 'fail' ? 'danger' : this.type === 'nsf' ? 'warn' : 'success'
    },
    btnText: function () {
      return this.type === 'fail' ? '重新付款' : this.type === 'nsf' ? '其他支付' : '知道了'
    },
    mainText: function () {
      return this.type === 'fail' ? '支付失败' : this.type === 'nsf' ? '余额不足' : '支付成功'
    },
    tipText: function () {
      return this.type === 'fail' ? '用户支付余额不足或取消支付' : this.type === 'nsf' ? '当前余额不足，赶快选择其他支付方式吧～' : '感谢您的购买'
    }
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
.q-popup {
  .main{
    width:750px;
    height:680px;
    background:rgba(255,255,255,1);
  }
  .close {
    top: 33px;
    right: 34px;
    position: absolute;
    display: inline-block;
    vertical-align: middle;
    color: rgba(155, 155, 155, 1);
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
