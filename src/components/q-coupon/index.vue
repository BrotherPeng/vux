<template>
  <div class="q-coupon">
    <label class="coutdown" v-if="coupon.coutdown <= 3">仅剩3天</label>
    <x-icon class="icon" type="ios-ionic-outline"></x-icon>
    <x-button class="share">分享好友</x-button>
    <x-button class="use">立即使用</x-button>
    <label class="cny">￥</label>
    <label class="price">{{coupon.price}}</label>
    <label class="desc">奇妙咖啡一杯</label>
    <label class="timelimit">使用期限:{{coupon.timelimit | moment("YYYY.MM.DD") }}</label>
  </div>
</template>

<i18n>
</i18n>

<script>
import XButton from '../x-button'

export default {
  name: 'q-coupon',
  components: {
    XButton
  },
  props: {
    coupon: Object
  },
  methods: {
    onEvent (event) {
      console.log('on', event)
    }
  }
}
</script>

<style scoped lang="less">
.q-coupon{
  position:relative;
  width:680px;
  height:210px;
  background:rgba(255,255,255,1);
  -background-image:url('../../assets/coupon-bg.png');
  -background-size:690px 220px;
  -background-repeat:no-repeat;
  box-shadow: 4px 4px 8px 0px rgba(237,237,237,1);
  border-radius: 8px ;
  .coutdown{
    position:absolute;
    left:0px;
    top:0px;
    width:80px;
    height:30px;
    line-height:30px;
    font-size:18px;
    font-family:PingFangSC-Regular;
    color:rgba(255,255,255,1);
    background:rgba(123,0,0,1);
    border-radius: 8px 0 8px 0;
    text-align:center;
  }
  .icon{
    position:absolute;
    left:35px;
    top:45px;
    width:120px;
    height:120px;
    fill:rgba(124,105,87,1);
  }
  .share{
    position:absolute;
    left:484px;
    top:45px;
    width:160px;
    line-height:50px;
    height:50px;
    background:rgba(255,255,255,1);
    border-radius: 25px ;
  }
  .use{
    position:absolute;
    left:484px;
    top:115px;
    width:160px;
    line-height:50px;
    height:50px;
    background:rgba(255,255,255,1);
    border-radius: 25px ;
  }
  .cny{
    position:absolute;
    left:233px;
    top:37px;
    width:19px;
    height:40px;
    font-size:28px;
    font-family:PingFangSC-Medium;
    color:rgba(141,122,101,1);
    line-height:40px;
  }
  .price{
    position:absolute;
    left:260px;
    top:16px;
    height:112px;
    font-size:80px;
    font-family:PingFangSC-Medium;
    color:rgba(141,122,101,1);
    line-height:112px;
  }
  .desc{
    position:absolute;
    left:233px;
    top:114px;
    height:33px;
    font-size:28px;
    font-family:PingFangSC-Medium;
    color:rgba(141,122,101,1);
    line-height:34px;
  }
  .timelimit{
    position:absolute;
    left:233px;
    top:155px;
    height:21px;
    font-size:20px;
    font-family:PingFangSC-Regular;
    color:rgba(155,155,155,1);
    line-height:20px;
  }
}
</style>
