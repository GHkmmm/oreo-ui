<template>
  <div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <or-button>查看代码</or-button>
    </div>
    <div class="demo-code">
      <pre class="language-html">
        <code v-html="Prism.highlight(component.__sourceCode, Prism.languages.html, 'html')"></code>
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
import OrButton from '../lib/Button.vue';
import Switch1Demo from './Switch1.demo.vue';
import Switch2Demo from './Switch2.demo.vue';

import 'prismjs';
import 'prismjs/themes/prism-okaidia.css'
const Prism = (window as any).Prism

export default {
  props: {
    component: Object
  },
  components: {
    OrButton
  },
  setup() {
    return {
      Prism
    }
  }
}
</script>

<style lang="scss">
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>