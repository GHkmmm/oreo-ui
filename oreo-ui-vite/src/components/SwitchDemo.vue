<template>
  <div class="switch-demo">
    <header>Switch组件</header>
    <div class="demo">
      <div class="switch-demo-title">常规用法</div>
      <div class="switch-demo-content">
        <switch1-demo />
      </div>
      <or-button>查看代码</or-button>
      <pre>{{Switch1Demo.__sourceCode}}</pre>
    </div>
    <div class="demo">
      <div class="switch-demo-title">支持disabled</div>
      <div class="switch-demo-content">
        <switch2-demo />
      </div>
      <or-button>查看代码</or-button>
      <pre>{{Switch2Demo.__sourceCode}}</pre>
    </div>
  </div>
</template>

<script>
import OrSwitch from '../lib/Switch.vue';
import OrButton from '../lib/Button.vue';
import Switch1Demo from './Switch1.demo.vue';
import Switch2Demo from './Switch2.demo.vue';
import { ref } from 'vue';

export default {
  name: 'SwitchDemo',
  components: {
    OrSwitch,
    OrButton,
    Switch1Demo,
    Switch2Demo
  },
  setup() {
    return {
      Switch1Demo,
      Switch2Demo
    }
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
    margin: 5px 0;
    margin-top: 10px;
  }
  .switch-demo-content {
    margin: 5px 0;
  }
}

</style>