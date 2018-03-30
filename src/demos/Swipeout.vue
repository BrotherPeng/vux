<template>
  <div>
  <div class="vux-1px-t">

    <swipeout>

      <swipeout-item @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow">
        <div slot="right-menu">
          <swipeout-button @click.native="onButtonClick('fav')" type="primary">{{$t('Yes')}}</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" type="warn">{{$t('Right')}}</swipeout-button>
        </div>
        <div slot="content" class="demo-content vux-1px-t">
        {{$t('JavaScript is the best language')}}
        </div>
      </swipeout-item>

      <swipeout-item :threshold=".5" underlay-color="#ccc">
        <div slot="right-menu">
          <swipeout-button @click.native="onButtonClick('fav')" background-color="#336DD6">{{$t('Fav')}}</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" background-color="#D23934">{{$t('Delete')}}</swipeout-button>
        </div>
        <div slot="content" class="demo-content vux-1px-tb">
        {{$t('threshold = 0.5')}}
        </div>
      </swipeout-item>

      <swipeout-item :disabled="disabled" ref="swipeoutItem" :right-menu-width="210" :sensitivity="15">
        <div slot="right-menu">
          <swipeout-button @click.native="onButtonClick('fav')" type="primary" :width="70">{{$t('Fav')}}</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" type="warn" :width="70">{{$t('Delete')}}</swipeout-button>
          <swipeout-button @click.native="onButtonClick('ignore')" type="default" :width="70">{{$t('Ignore')}}</swipeout-button>
        </div>

        <div slot="left-menu">
          <swipeout-button @click.native="onButtonClick('fav')" type="primary">{{$t('Fav')}}</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" type="warn">{{$t('Delete')}}</swipeout-button>
        </div>

        <div slot="content" class="demo-content vux-1px-b">
        {{$t('now ' + (disabled ? 'disabled' : 'enabled'))}}
        </div>
      </swipeout-item>

    </swipeout>
  </div>


    <div style="padding:15px;">
      <x-button @click.native="disabled = false" type="primary" :disabled="!disabled">{{ $t('set Enabled') }}</x-button>
      <x-button @click.native="disabled = true" type="warn" :disabled="disabled">{{ $t('set Disabled') }}</x-button>
      <x-button @click.native="$refs.swipeoutItem.open('left')" type="primary">{{ $t('open left menu') }}</x-button>
      <x-button @click.native="$refs.swipeoutItem.open('right')" type="primary">{{ $t('open right menu') }}</x-button>
      <x-button @click.native="$refs.swipeoutItem.close()" type="warn">{{ $t('close menu') }}</x-button>
    </div>
    <br>
    <group-title>use vux-1px to style items</group-title>
    <swipeout class="vux-1px-tb">
      <swipeout-item transition-mode="follow" v-for="i in 3" :key="i">
        <div slot="right-menu">
          <swipeout-button type="primary">{{$t('Yes')}}</swipeout-button>
          <swipeout-button type="warn">{{$t('Right')}}</swipeout-button>
        </div>
        <div slot="content" :class="{'vux-1px-b': i !== 3, 'vux-1px-t': i === 1}" style="padding:12px;">{{ $t('JavaScript is the best language') }}</div>
      </swipeout-item>
    </swipeout>
    <br>
    <br>
    <q-swipeout>
      <q-swipeout-item transition-mode="reveal" v-for="i in 3" :key="i">
        <div slot="right-menu">
          <!--<q-swipeout-button type="primary">{{$t('Yes')}}</q-swipeout-button>-->
          <q-swipeout-button type="warn"><icon type="success" class="icon-delete"></icon></q-swipeout-button>
        </div>
        <div slot="content">
          <div class="q-sw-cell">
            <div class="q-sw-cell-img">
              <icon type="success" class="checkmark"></icon>
              <img src="item.src"/>
            </div>
            <div class="q-sw-cell-body">
              <div class="q-sw-cell-body-top">
                <div class="q-sw-cell-body-title">
                  <div class="item">镀铜不锈钢马克杯</div>
                </div>
                <div class="q-sw-cell-body-desc">
                  <div>金色</div>
                </div>
              </div>

              <div class="q-sw-cell-body-bottom">
                <div>¥10.50</div>
                <!--<div>去制作</div>-->
                <!--<slot name="mid"></slot>-->
              </div>
            </div>
            <div class="q-sw-cell-right">
              <div><icon type="success" class="checkmark"></icon></div>
              <div>1</div>
              <div><icon type="success" class="checkmark"></icon></div>
            </div>
          </div>
        </div>
      </q-swipeout-item>
    </q-swipeout>
    <br/>
    <br/>
    <q-swipeout>
      <q-swipeout-item :disabled="true" transition-mode="reveal" v-for="i in 3" :key="i">

        <div slot="content">
          <div class="q-sw-cell q-sw-cell-padding">
            <div class="q-sw-cell-left">
              <span class="q-sw-cell-dot"></span>
              <!--<img src="item.src"/>-->
            </div>
            <div class="q-sw-cell-body">
              <div class="q-sw-cell-body-top">
                <div class="q-sw-cell-body-title">
                  <div class="item">买券60张[赠送9张]</div>
                  <div class="item">¥480.00</div>
                </div>
                <!--<div class="q-sw-cell-body-desc">-->
                  <!--<div>asdfsdf</div>-->
                <!--</div>-->
              </div>

              <div class="q-sw-cell-body-bottom">
                <div class="q-sw-cell-body-bottom-gray">2018.1.5 18:03</div>
                <!--<div>去制作</div>-->
                <!--<slot name="mid"></slot>-->
              </div>
            </div>
          </div>
        </div>
      </q-swipeout-item>
    </q-swipeout>
  </div>
</template>

<i18n>
Fav:
  zh-CN: 收藏
Delete:
  zh-CN: 删除
JavaScript is the best language:
  zh-CN: JavaScript 是最好的语言
now enabled:
  zh-CN: 当前可操作
now disabled:
  zh-CN: 当前不可操作
set Enabled:
  zh-CN: 设置可操作
set Disabled:
  zh-CN: 设置不可操作
open left menu:
  zh-CN: 打开左菜单
open right menu:
  zh-CN: 打开右菜单
close menu:
  zh-CN: 关闭菜单
threshold = 0.5:
  zh-CN: 设置滑动阙值为 0.5
Yes:
  zh-CN: 是的
Right:
  zh-CN: 正确
Ignore:
  zh-CN: 忽略
</i18n>

<script>
import { GroupTitle, Swipeout, SwipeoutItem, SwipeoutButton, QSwipeout, QSwipeoutItem, QSwipeoutButton, XButton, Icon } from 'vux'

export default {
  components: {
    GroupTitle,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    QSwipeout,
    QSwipeoutItem,
    QSwipeoutButton,
    XButton,
    Icon
  },
  methods: {
    onButtonClick (type) {
      alert('on button click ' + type)
    },
    handleEvents (type) {
      console.log('event: ', type)
    }
  },
  data () {
    return {
      disabled: false
    }
  }
}
</script>

<style lang="less">
.demo-content {
  padding: 10px 10px;
}
.icon-delete {
  font-size: 33px;
  color: #FFFFFF;
}

.q-sw-cell-padding {
  padding: 40px 28px 40px 28px !important;
}

.q-sw-cell{
  display: flex;
  /*width: 642px;*/
  background-color: #ffffff;
  padding: 30px 26px 30px 26px;
  /*min-height: 76px;*/
  border-radius: 6px ;
  /*padding-bottom: 30px;*/
  .q-sw-cell-img{
    /*width:229px;*/
    /*height:229px;*/
    margin-right: 30px;
    display: flex;
    align-items: center;
    .checkmark{
      font-size: 38px;
    }
  }


  .q-sw-cell-left{
    /*width:229px;*/
    /*height:229px;*/
    margin-top: 14px;
    margin-right: 28px;
    display: flex;
    align-items: flex-start;

    .q-sw-cell-dot{
      width:12px;
      height:12px;
      background:rgba(141,122,101,1);
      border-radius: 6px;
    }
  }

  img{
    margin-left: 21px;
    width:180px;
    height:180px;
  }

  .q-sw-cell-right {
    display: flex;
    /*align-content: space-between;*/
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    div {
      text-align: center;
      .checkmark{
        font-size: 48px;
      }
    }

    :nth-child(2){
      /*height:43px;*/
      font-size:36px;
      font-family:SFNSDisplay-Medium;
      color:rgba(74,74,74,1);
      /*line-height:43px;*/
    }
    /*:nth-child(1) icon{
      font-size: 48px;
    }*/
  }

  .q-sw-cell-body {
    flex: 2;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;

    .q-sw-cell-body-top{
      .q-sw-cell-body-title {
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
          line-height: 44px;
        }

        :nth-child(2){
          /*height:28px;*/
          font-size:28px;
          font-family:PingFangSC-Medium;
          color:rgba(141,122,101,1);
          /*line-height:28px;*/
        }
      }

      .q-sw-cell-body-desc{
        font-size:24px;
        color:rgba(155,155,155,1);
        height:40px;
        line-height:40px;
      }
    }


    .q-sw-cell-body-bottom{
      display: flex;
      justify-content: space-between;
      /*width: 100%;*/
      align-items: flex-end;

      height:33px;
      font-size:28px;
      font-family:SFNSDisplay-Medium;
      color:rgba(141,122,101,1);
      line-height:33px;

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
      .q-sw-cell-body-bottom-left {
        font-size:28px;
        font-family:PingFangSC-Medium;
        color:rgba(141,122,101,1);
        line-height:28px;
        height: 28px;
      }

      .q-sw-cell-body-bottom-gray {
        font-size:22px;
        font-family:PingFangSC-Medium;
        color:#9B9B9B;
        line-height:22px;
        height: 22px;
      }

      .panel-order-goods-num {
        font-size:36px;
        font-family:PingFangSC-Medium;
        color:rgba(102,102,102,1);
        line-height:36px;
      }
    }
  }
}
</style>
