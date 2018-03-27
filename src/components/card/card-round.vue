<template>
  <div class="gc-card">
    <div class="gc-card-header" :style="headerStyle" v-if="$slots.header || header">
      <slot name="header"> { { header } }

      </slot>
    </div>
    <div class="gc-card-body" :style="bodyStyle">
      <slot></slot>
    </div>
    <div class="gc-card-bottom" :style="bottomStyle" v-if="$slots.bottom || bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'card-round',
    data () {
      return {}
    },
    props: {
      'header': String,
      cardHeaderHeight: String,
      cardBodyHeight: String,
      cardFooterHeight: String
    },
    computed: {
      headerStyle () {
        return {
          height: this.cardHeaderHeight
        }
      },
      bodyStyle () {
        return {
          height: this.cardBodyHeight
        }
      },
      bottomStyle () {
        return {
          height: this.cardFooterHeight
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .gc-card {
    /*border: 1px #e2e2e2 solid;*/
    border-radius: 18px;
    box-shadow: 0px 0px 6px 1px rgba(237,237,237,1);
    display: flex;
    /*flex-wrap: wrap;*/
    flex-direction: column;

  }

  .gc-card-bottom, .gc-card-header, .gc-card-body {
    // flex: 1;
    padding: 18px;
  }

  .gc-card-header {
    border-bottom: 1px #D8D8D8 solid;
  }

  .gc-card-bottom {
    border-top: 1px #D8D8D8 solid;
  }
</style>
