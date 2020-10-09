<template>
  <div class="button-demo">
    <header>Button示例</header>
    <Demo :component="Button1Demo" />
    <Demo :component="Button2Demo" />
    <Demo :component="Button3Demo" />
    <Demo :component="Button4Demo" />
  </div>
</template>

<script lang="ts">
import OrButton from '../lib/Button.vue';
import Demo from './Demo.vue';
import Button1Demo from './ButtonDemo/Button1.demo.vue';
import Button2Demo from './ButtonDemo/Button2.demo.vue';
import Button3Demo from './ButtonDemo/Button3.demo.vue';
import Button4Demo from './ButtonDemo/Button4.demo.vue';

export default {
  name: 'ButtonDemo',
  components: {
    OrButton,
    Demo
  },
  setup() {
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo
    }
  }
}
</script>

<style lang="scss">
.button-demo{
  header {
    font-size: 36px;
  }
  .button-demo-title {
    font-size: 24px;
    margin-top: 5px;
  }
  * {
    margin: 5px 0;
  }
}
</style>