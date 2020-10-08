<template>
  <div class="switch-demo">
    <header>Switch组件</header>
    <div class="demo">
      <div class="switch-demo-title">常规用法</div>
      <div class="switch-demo-content">
        <switch1-demo />
      </div>
      <or-button>查看代码</or-button>
      <pre class="language-html">
        <code v-html="Prism.highlight(Switch1Demo.__sourceCode, Prism.languages.html, 'html')"></code>
      </pre>
    </div>
    <div class="demo">
      <div class="switch-demo-title">支持disabled</div>
      <div class="switch-demo-content">
        <switch2-demo />
      </div>
      <or-button>查看代码</or-button>
      <pre>
        <code class="language-html" v-html="Prism.highlight(Switch2Demo.__sourceCode, Prism.languages.html, 'html')"></code>
      </pre>
    </div>
  </div>
</template>

<script>
import OrSwitch from '../lib/Switch.vue';
import OrButton from '../lib/Button.vue';
import Switch1Demo from './Switch1.demo.vue';
import Switch2Demo from './Switch2.demo.vue';
import { ref } from 'vue';

import 'prismjs';
import 'prismjs/themes/prism-okaidia.css'
const Prism = window.Prism
console.log(Prism);

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