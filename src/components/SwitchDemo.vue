<template>
  <div class="switch-demo">
    <header>Switch组件</header>
    <Demo :component="Switch1Demo"></Demo>
    <Demo :component="Switch2Demo"></Demo>
  </div>
</template>

<script>
import Switch1Demo from './Switch1.demo.vue';
import Switch2Demo from './Switch2.demo.vue';
import Demo from './Demo.vue';
import { ref } from 'vue';

export default {
  name: 'SwitchDemo',
  components: {
    Demo
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
}

</style>