<template>
  <div class="container">
    <group>
      <cell title="cell" value="hello" is-link></cell>
      <cell-box is-link>
        cell-box long long long long long long long
      </cell-box>
      <cell-box>
        cell-box hello world hello world hello world
      </cell-box>
      <cell title="cell" value="hello" is-link></cell>
    </group>

    <group>
      <cell title="咖啡券兑换" value="已使用1张咖啡券" is-link></cell>
    </group>

<group>
      <cell title="支付方式">
      <span>微信支付</span>
      <x-icon type="ios-plus" class="cell-x-icon"></x-icon>
      </cell>
    </group>

  </div>
</template>

<script>
import { Group, Cell, CellBox } from 'vux'

export default {
  components: {
    Group,
    Cell,
    CellBox
  }
}
</script>
<style lang="less" scoped>
.container{
  width: 90%;
  margin-left: 5%;
}
</style>

