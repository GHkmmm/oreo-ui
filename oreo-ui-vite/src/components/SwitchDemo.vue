<template>
  <div class="switch-demo">
    <header>Switch组件</header>
    <div class="switch-demo-title">基本样式</div>
    <div class="switch-demo-content">
      <or-switch v-model:is-on="isOn"/>
      <div><or-button type="primary">查看代码</or-button></div>
    </div>
  </div>
</template>

<script>
import OrSwitch from '../lib/Switch.vue';
import OrButton from '../lib/Button.vue';
import { ref } from 'vue';

export default {
  name: 'SwitchDemo',
  components: {
    OrSwitch,
    OrButton
  },
  setup() {
    const isOn = ref(false)
    return {isOn}
  }
}
</script>

<style lang="scss">
.switch-demo {
  header {
    font-size: 36px;
  }
  .switch-demo-title {
    font-size: 24px;
    margin-top: 5px;
  }
  .switch-demo-content {
    margin-top: 5px;
  }
}

</style>