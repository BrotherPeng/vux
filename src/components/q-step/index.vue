<template>
      <step v-model="current" background-color='#fbf9fe'>
        <step-item :title="$t('step 1')" description="step 1"></step-item>
        <step-item :title="$t('step 2')" description="step 2"></step-item>
        <step-item :title="$t('step 3')" description="step 3"></step-item>
      </step>
</template>

<i18n>
next step:
  zh-CN: 下一步
done:
  zh-CN: 已完成
processing:
  zh-CN: 进行中
end:
  zh-CN: 结束
step 1:
  zh-CN: 步骤1
step 2:
  zh-CN: 步骤2
step 3:
  zh-CN: 步骤3
</i18n>

<script>
import Step from '../step/step'
import StepItem from '../step/step-item'

export default {
  name: 'q-step',
  components: {
    Step,
    StepItem
  },
  props: {
    value: Number
  },
  watch: {
    value (val) {
      this.current = val
    }
  },
  data () {
    return {
      current: 0
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
</style>
