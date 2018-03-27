<template>
    <q-dialog v-model="isShow" :type="dialogType" :btn-text="btnText" :class="classObject">
      <div :class="mainClassObject">
          <x-icon v-if="type === 'success'" type="ios-checkmark-outline" class="icon"></x-icon>
          <x-icon v-if="type === 'nsf'" type="ios-information-outline" class="icon"></x-icon>
          <x-icon v-if="type === 'fail'" type="ios-close-outline" class="icon"></x-icon>
          <span class="text">{{mainText}}</span>
      </div>
      <p class="tip">{{tipText}}</p>
    </q-dialog>
</template>

<script>
import QDialog from '../q-dialog'

export default {
  name: 'q-dialog-pay',
  components: {
    QDialog
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
.q-dialog-pay {
  .weui-dialog{

    width:500px;
    height:600px;
    max-width:500px;

    .main {
      width:500px;
      height:400px;
      border-radius: 20px 20px 0px 0px ;

      .icon {
        fill:rgba(255, 255, 255, 1);
        width:162px;
        height:162px;
        left:169px;
        top:100px;
        position:absolute;
      }
      .text{
        position:absolute;
        left:177px;
        top:304px;
        width:147px;
        height:32px;
        font-size:36px;
        font-family:PingFangSC-Medium;
        color:rgba(255,255,255,1);
        line-height:32px;
      }
    }

    .tip{
      width:100%;
      margin-top:54px;
      text-align:center;
      font-size:24px;
      font-family:PingFangSC-Regular;
      color:rgba(155,155,155,1);
      line-height:24px;
    }

    .main-success{
      background:rgba(90,219,152,1);
      box-shadow: 0px 12px 16px -4px rgba(146,239,191,1);
    }
    .main-fail{
      background:rgba(219,110,90,1);
      box-shadow: 0px 12px 16px -4px rgba(248,151,133,0.32);
    }
    .main-nsf{
      background:rgba(241,197,126,1);
      box-shadow: 0px 12px 16px -4px rgba(255,239,210,1);
    }
    .vux-ok {
      bottom:-30px;
      left:110px;
    }
    .vux-close {
      color:rgba(255, 255, 255, 1);
    }
  }
}
</style>
