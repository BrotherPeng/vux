<template>
  <div class="vux-q-swipeout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'q-swipeout'
}
</script>

<style lang="less">
@import '../../styles/variable.less';

.vux-q-swipeout {
  width: 100%;
  overflow: hidden;
}
.vux-q-swipeout-item {
  position: relative;
  margin: 25px;
  width:700px;
  height:240px;
  background:rgba(255,255,255,1);
  box-shadow: 4px 4px 8px 0px rgba(237,237,237,1);
  border-radius: 6px ;
}
.vux-q-swipeout-button-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-size: 0;
  text-align: right;
}
.vux-q-swipeout-button-box-left {
  text-align: left;
}
.vux-q-swipeout-button-box > div {
  height: 100%;
}
.vux-q-swipeout-button {
  height: 100%;
  text-align: center;
  font-size: 14px;
  color: @swipeout-button-font-color;
  border: none;
}
.vux-q-swipeout-content {
  width:700px;
  height:240px;
  background:rgba(255,255,255,1);
  box-shadow: 4px 4px 8px 0px rgba(237,237,237,1);
  border-radius: 6px ;
  position: relative;
  background: @swipeout-content-bg-color;

}
.vux-q-swipeout-content.vux-q-swipeout-content-animated {
  transition: transform 0.2s;
}
.vux-q-swipeout-button-primary {
  background-color: @swipeout-button-primary-bg-color;
}
.vux-q-swipeout-button-warn {
  background-color: @swipeout-button-warn-bg-color;
}
.vux-q-swipeout-button-default {
  background-color: @swipeout-button-default-bg-color;
}
</style>
