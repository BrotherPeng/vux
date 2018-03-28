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
      <q-swipeout-item transition-mode="reveal" v-for="i in 3" :key="i" :right-menu-width="190">
        <div slot="right-menu">
          <!--<q-swipeout-button type="primary">{{$t('Yes')}}</q-swipeout-button>-->
          <q-swipeout-button type="warn" :width="80">{{$t('Right')}}</q-swipeout-button>
        </div>
        <div slot="content">
          <div class="q-cell">
            <div class="q-cell-img">
              <img src="item.src"/>
            </div>
            <div class="q-cell-body">
              <div class="q-cell-body-top">
                <div class="q-cell-body-title">
                  <div class="item">asdf</div>
                  <div class="item">sadfsfd</div>
                </div>
                <div class="q-cell-body-desc">
                  <div>asdfsdf</div>
                </div>
              </div>

              <div class="q-cell-body-bottom">
                <div>asfsadf</div>
                <div>去制作</div>
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
import { GroupTitle, Swipeout, SwipeoutItem, SwipeoutButton, QSwipeout, QSwipeoutItem, QSwipeoutButton, XButton } from 'vux'

export default {
  components: {
    GroupTitle,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    QSwipeout,
    QSwipeoutItem,
    QSwipeoutButton,
    XButton
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

.q-cell{
  display: flex;
  /*width: 642px;*/
  background-color: #ffffff;
  padding: 30px 26px;
  /*padding-bottom: 30px;*/
  .q-cell-img{
    width:180px;
    height:180px;
    margin-right: 20px;
  }
  img{
    width:180px;
    height:180px;
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
        font-weight: 600;
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
}
</style>
