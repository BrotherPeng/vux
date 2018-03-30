<template>
  <div>
    <group :title="$t('Switch the type')">
      <radio title="type" v-model="type" :options="['1', '2', '3', '4', '5']"></radio>
    </group>
    <panel :header="$t('List of content with image')" :footer="footer" :list="list" :type="type" @on-img-error="onImgError"></panel>

    <br/>
    <br/>

    <div style="display: flex; justify-content: center;">
      <q-panel :list="orderList" @on-click-btn="onBtnClick"><!--:headerRight="headerRight" :headerLeft="headerLeft" -->
        <!--<div slot="headerLeft" >订单编号：FOD12sdfsds34546465</div>-->
        <!--<div slot="headerRight" >已完成</div>-->
        <img slot="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
      </q-panel>
    </div>

  </div>
</template>

<i18n>
Switch the type:
  zh-CN: 切换样式
List of content with image:
  zh-CN: 图文组合列表
More:
  zh-CN: 查看更多
</i18n>

<script>
import { Panel, Group, Radio, QPanel } from 'vux'

export default {
  components: {
    Panel,
    Group,
    Radio,
    QPanel
  },
  methods: {
    onImgError (item, $event) {
      console.log(item, $event)
    },
    onBtnClick (order) {
      console.log(order)
    }
  },
  data () {
    return {
      type: '1',
      list: [{
        src: 'http://somedomain.somdomain/x.jpg',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '<h1>标题一</h1>',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }],
      footer: {
        title: this.$t('more'),
        url: 'http://vux.li'
      },
      orderList: [{
        headerLeft: '<span style="color: #666666;">订单编号：FOD12sdfsds34546465</span>',
        headerRight: '已完成',
        imgSize: 'img-middel',
        desc: '共两件商品  总计：￥66.50',
        footerButtons: [{
          style: 'cancel',
          text: '取消订单'
        }, {
          style: 'ok',
          text: '立即购买'
        }],
        goodsList: [{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '骨瓷套装哈哈骨瓷套装哈哈骨瓷套装哈哈',
//          titleRight: '￥8.00',
          desc: '金色',
          bottomLeft: '<span class="q-cell-body-bottom-left">￥56.00</span>',
          bottomRightText: '<span class="panel-order-goods-num">x1</span>',
          url: '/component/cell'
        }, {
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '骨瓷套装xcx哈',
//          titleRight: '￥8.00',
          desc: '银色',
          bottomLeft: '<span class="q-cell-body-bottom-left">￥56.00</span>',
//          bottomRightButton: '去制作',
          bottomRightText: '<span class="panel-order-goods-num">x1</span>',
          url: '/component/cell'
        }]
      }, {
        headerLeft: '<span style="color: #666666;">订单编号：FOD12sdfsds34546465</span>',
        headerRight: '已完成',
        imgSize: 'img-middel',
        desc: '共两件商品  总计：￥66.50',
        footerButtons: [{
          style: 'ok',
          text: '再次购买'
        }],
        goodsList: [{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '骨瓷套装哈哈',
//          titleRight: '￥8.00',
          desc: '金色',
          bottomLeft: '<span class="q-cell-body-bottom-left">￥56.00</span>',
          bottomRightText: '<span class="panel-order-goods-num">x1</span>',
//        bottomRight: '去制作',
          url: '/component/cell'
        }, {
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '镀铜不锈钢马克杯',
//          titleRight: '￥8.00',
          desc: '哈哈色',
          bottomLeft: '<span class="q-cell-body-bottom-left">￥56.00</span>',
          bottomRightText: '<span class="panel-order-goods-num">x1</span>',
          url: '/component/cell'
        }]
      }, {
        headerLeft: '<span style="color: #666666;">订单编号：FOD12sdfsds34546465</span>',
        headerRight: '处理中',
        imgSize: 'img-small',
        goodsList: [{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '没事咖啡',
          titleRight: '￥8.00',
          desc: '中杯/加',
          bottomLeft: '2018.1.5',
//          bottomRightText: '去制作',
          bottomRightButton: '再来一杯',
          url: '/component/cell'
        }]
      }, {
//        headerLeft: '<span style="color: #666666;">订单编号：FOD12sdfsds34546465</span>',
//        headerRight: '处理中',
        isGoods: 'goods',
        imgSize: 'img-big',
        goodsList: [{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '没事咖啡没事咖啡没事咖啡没事咖啡没事咖啡没事咖啡',
//          titleRight: '￥8.00',
//          desc: '中杯/加',
          bottomLeft: '<span class="q-cell-body-bottom-left">￥56.00</span>',
//          bottomRightText: '去制作',
          bottomRightButton: '再来一杯',
          url: '/component/cell'
        }]
      }, {
//        headerLeft: '<span style="color: #666666;">订单编号：FOD12sdfsds34546465</span>',
//        headerRight: '处理中',
        isGoods: 'goods',
        imgSize: 'img-big',
        goodsList: [{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '没事咖啡没事咖啡没事咖啡',
//          titleRight: '￥8.00',
//          desc: '中杯/加',
          bottomLeft: '<span class="q-cell-body-bottom-left">￥56.00</span>',
//          bottomRightText: '去制作',
          bottomRightButton: '再来一杯',
          url: '/component/cell'
        }]
      }, {
//        headerLeft: '<span style="color: #666666;">订单编号：FOD12sdfsds34546465</span>',
//        headerRight: '处理中',
        isGoods: 'goods',
        imgSize: 'img-big',
        goodsList: [{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '没事咖啡没事咖啡没事咖啡',
//          titleRight: '￥8.00',
//          desc: '中杯/加',
          bottomLeft: '<span class="q-cell-body-bottom-left">￥56.00</span>',
//          bottomRightText: '去制作',
          bottomRightButton: '再来一杯',
          url: '/component/cell'
        }]
      }]
    }
  }
}
</script>

<style  lang="less" scoped>

</style>
