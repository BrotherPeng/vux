<template>
  <!--<i :class="[className, isMsg ? 'weui-icon_msg' : '']"></i>-->
  <svg class="qicon" aria-hidden="true">
    <use :xlink:href="className"></use>
  </svg>
</template>

<script>
import iconfont from '../../libs/iconfont'
export default {
  name: 'q-icon',
  props: {
    iconName: String,
    iconfont: iconfont
  },
  computed: {
    className () { // compatible with old type param
      return '#qimiao-' + this.iconName
    }
  }
}
</script>

<style lang="less">
@import '../../styles/weui/icon/weui_icon_font';

/**
following styles will be removed after v3.0.0
*/
.qicon {
  width: 60px; height: 60px;
  vertical-align: -1.5px;
  fill: currentColor;
  overflow: hidden;
}
</style>
