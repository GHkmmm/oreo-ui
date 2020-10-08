<template>
  <div class="switch-demo">
    <header>Switch组件</header>
    <Demo :component="Switch1Demo"></Demo>
    <Demo :component="Switch2Demo"></Demo>
  </div>
</template>

<script>
import OrSwitch from '../lib/Switch.vue';
import OrButton from '../lib/Button.vue';
import Switch1Demo from './Switch1.demo.vue';
import Switch2Demo from './Switch2.demo.vue';
import Demo from './Demo.vue';
import { ref } from 'vue';

import 'prismjs';
import 'prismjs/themes/prism-okaidia.css'
const Prism = window.Prism

export default {
  name: 'SwitchDemo',
  components: {
    OrSwitch,
    OrButton,
    Switch1Demo,
    Switch2Demo,
    Demo
  },
  setup() {
    return {
      Switch1Demo,
      Switch2Demo,
      Prism
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