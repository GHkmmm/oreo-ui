<template>
  <div class="switch-demo">
    <header>Switch组件</header>
    <div class="title1">基本样式</div>
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
  * {
    margin: 5px 0;
  }
  header {
    font-size: 36px;
  }
  .title1 {
    font-size: 24px;
  }
  .switch-demo-content {

  }
}

</style>