<template>
  <div>
    <div class="q-panel" v-for="order in list">
      <div class="q-panel-header" v-if="order.headerLeft || order.headerRight">
        <!--<slot name="headerLeft"></slot>-->
        <!--<slot name="headerRight"></slot>-->
        <div v-html="order.headerLeft"></div>
        <div v-html="order.headerRight"></div>
      </div>
      <div class="q-cell" v-for="item in order.goodsList" v-bind:class="[order.isGoods, order.imgSize]">
        <div class="q-cell-img">
          <img :src="item.src" @error="onImgError(item, $event)"/>
        </div>
        <div class="q-cell-body">
          <div class="q-cell-body-top">
            <div class="q-cell-body-title">
              <div class="item" v-html="item.title"></div>
              <div class="item" v-html="item.titleRight"></div>
            </div>
            <div class="q-cell-body-desc" v-if="item.desc">
              <div v-html="item.desc"></div>
            </div>
          </div>

          <div class="q-cell-body-bottom">
            <div v-html="item.bottomLeft"></div>
            <div v-if="item.bottomRightButton" @click.prevent="onItemClick(item)"><x-button class="button" type="primary">{{item.bottomRightButton}}</x-button></div>
            <div v-if="item.bottomRightText" v-html="item.bottomRightText">去制作</div>
            <!--<slot name="mid"></slot>-->
          </div>
        </div>
      </div>

      <!--<div class="q-cell">
        <div class="q-cell-img">
          <slot name="img"></slot>
        </div>
        <div class="q-cell-body">
          <div class="q-cell-body-top">
            <div class="q-cell-body-title">
              <div class="item">美式咖啡</div>
              <div class="item">￥8.00</div>
            </div>
            <div class="q-cell-body-desc">
              <div>中杯/加</div>
            </div>
          </div>

          <div class="q-cell-body-bottom">
            <div>2018.1.5</div>
            <div>去制作</div>
            &lt;!&ndash;<slot name="mid"></slot>&ndash;&gt;
          </div>
        </div>
      </div>-->

      <div class="q-panel-desc" v-if="order.desc">
        <div v-html="order.desc"></div>
      </div>
      <div class="q-panel-footer" v-if="order.footerButtons">
        <!--<x-button type="primary">primary</x-button>-->
        <!--<button @click="onItemClick(order)" class="button" type="default">asdf</button>-->

        <b v-for="b in order.footerButtons">
          <x-button v-if="b.style === 'cancel'" @click.native="onBtnClick(b)" class="button" type="default">{{b.text}}</x-button>
          <x-button v-if="b.style === 'ok'" @click.native="onBtnClick(b)" class="button" type="primary">{{b.text}}</x-button>
        </b>

        <!--<div v-if="order.status == 'paid'"><button></button></div>-->
        <!--<div v-if="order.status == 'unpaid'"><button></button></div>-->
        <!--<div v-if="order.status =='unpaid'"><button></button></div>-->
        <!--<div v-if="order.footertext" v-html="item.footertext">去制作</div>-->
      </div>

    </div>
  </div>


</template>

<script>
  import { go, getUrl } from '../../libs/router'
  import XButton from '../x-button'
  export default {
    name: 'q-cell',
    components: {
      XButton
    },
    props: {
      headerLeft: String,
      headerRight: String,
      list: Array
    },
    created () {

    },
    beforeMount () {

    },
    computed: {

    },
    methods: {
      onImgError (item, $event) {
        this.$emit('on-img-error', JSON.parse(JSON.stringify(item)), $event)
        if (item.fallbackSrc) {
          $event.target.src = item.fallbackSrc
        }
      },
      onClick () {

      },
      onItemClick (item) {
        console.log('点了按钮')
        this.$emit('on-click-item', item)
        go(item.url, this.$router)
      },
      onBtnClick (b) {
        console.log('点了按钮')
        this.$emit('on-click-btn', b)
//        go(item.url, this.$router)
      },
      getUrl (url) {
        return getUrl(url, this.$router)
      }
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="less">
  .q-panel{
    /*margin: 25px;*/
    width:644px;
    /*height:810px;*/
    background:rgba(255,255,255,1);
    box-shadow: 4px 4px 8px 0px rgba(237,237,237,1);
    border-radius: 6px;
    padding: 32px 28px 0px 28px;
    margin-bottom: 28px;
    .q-panel-header{
      display: flex;
      justify-content: space-between;
      font-size:28px;
      /*font-weight: 600;*/
      color:rgba(74,74,74,1);
      line-height:32px;
      margin-bottom: 28px;

      :nth-child(2){
        font-size:28px;
        font-family:PingFangSC-Medium;
        color:rgba(141,122,101,1);
        line-height:28px;
      }
    }

    .q-panel-desc{
      border-top: 1px #DEDEDE solid;
      border-bottom: 1px #DEDEDE solid;
      text-align: right;
      font-size:28px;
      font-family:PingFangSC-Regular;
      color:rgba(102,102,102,1);
      line-height:28px;
      padding-top: 28px;
      padding-bottom: 28px;
    }

    .q-panel-footer{
      text-align: right;
      padding-top: 28px;
      padding-bottom: 28px;

      .button{
        display: inline;
        margin-left: 28px;
        width:160px;
        height:50px;
        border-radius: 25px ;
        /*height:28px;*/
        font-size:20px;
        font-family:PingFangSC-Medium;
        color:rgba(141,122,101,1);
        line-height:50px;
      }
    }
  }
  .q-cell{
    display: flex;
    /*width: 642px;*/
    background-color: #ffffff;
    border-top: 1px #DEDEDE solid;
    padding-top: 28px;
    padding-bottom: 28px;
    .q-cell-img{
      width:180px;
      height:180px;
      margin-right: 20px;
    }
    img{
      width:180px;
      height:180px;
    }
  }
  .goods {
    border-top: 0px !important;
    padding-top: 0px !important;
    /*.q-cell-img{
      width:258px;
      height:258px;
      margin-right: 20px;
    }
    img{
      width:258px;
      height:258px;
    }*/

    .q-cell-body-title {
      margin-top: 21px;
      width: 323px;
    }

    .q-cell-body-bottom{
      margin-bottom: 21px;
      align-items: center !important;
      .button{
        width:140px !important;
        height:60px !important;
        border-radius: 100px !important;
      }

    }
  }
  .img-big {
    .q-cell-img{
      width:258px;
      height:258px;
      margin-right: 20px;
    }
    img{
      width:258px;
      height:258px;
    }
  }
  .img-middle {
    .q-cell-img{
      width:180px;
      height:180px;
      margin-right: 20px;
    }
    img{
      width:180px;
      height:180px;
    }
  }
  .img-small {
    .q-cell-img{
      width:140px;
      height:140px;
      margin-right: 20px;
    }
    img{
      width:140px;
      height:140px;
    }
  }
  .q-cell-body {
    flex: 2;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    .q-cell-body-top{
      .q-cell-body-title {
        display: flex;
        justify-content: space-between;
        /*font-weight: 600;*/
        font-size:32px;
        color:rgba(74,74,74,1);
        line-height:32px;
        margin-bottom: 5px;

        :nth-child(1){
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          line-height: 40px;
        }
        :nth-child(2){
          font-size:28px;
          font-family:PingFangSC-Medium;
          color:rgba(141,122,101,1);
          line-height:28px;
        }
      }
      .q-cell-body-desc{
        font-size:24px;
        color:rgba(155,155,155,1);
        height:40px;
        line-height:40px;
      }
    }


    .q-cell-body-bottom{
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: flex-end;
      font-size:22px;
      font-family:PingFangSC-Regular;
      color:rgba(155,155,155,1);
      line-height:20px;

      .button{
        display: inline;
        margin-left: 28px;
        width:160px;
        height:50px;
        border-radius: 25px ;
        /*height:28px;*/
        font-size:20px !important;
        font-family:PingFangSC-Medium;
        color:rgba(141,122,101,1);
        line-height:50px;
      }

      /*:nth-child(1){*/
        /*text-align: ;*/
      /*}*/
      .q-cell-body-bottom-left {
        font-size:28px;
        font-family:PingFangSC-Medium;
        color:rgba(141,122,101,1);
        line-height:28px;
        height: 28px;
      }

      .panel-order-goods-num {
        font-size:36px;
        font-family:PingFangSC-Medium;
        color:rgba(102,102,102,1);
        line-height:36px;
      }
    }
  }



</style>
