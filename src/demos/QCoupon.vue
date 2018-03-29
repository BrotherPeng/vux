<template>
  <div class="list">
    <q-coupon class="item" v-for="coupon in coupons" :key="coupon.id" :coupon="coupon"></q-coupon>
  </div>
</template>

<i18n>
</i18n>

<script>
import { QCoupon } from 'vux'

export default {
  components: {
    QCoupon
  },
  methods: {
  },
  data () {
    return {
      coupons: [
        {
          id: 1,
          coutdown: 3,
          timelimit: new Date(),
          price: 8
        },
        {
          id: 2,
          coutdown: 7,
          timelimit: new Date(2016, 7, 5),
          price: 10
        },
        {
          id: 3,
          coutdown: 7,
          timelimit: new Date(2016, 3, 25),
          price: 12
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.list{
  padding: 20px 0 0 0;
}
.item{
  margin:0 35px 24px;
}
</style>
