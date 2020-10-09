<template>
  <div class="tabs-demo">
    <header>Tabs示例</header>
    <Demo :component="Tabs1Demo" />
  </div>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Tabs1Demo from './TabsDemo/Tabs1.demo.vue';

export default {
  name: 'TabsDemo',
  components: {
    Demo
  },
  setup() {
    return {
      Tabs1Demo
    }
  }
}
</script>

<style lang="scss">
.tabs-demo {
  header {
    font-size: 36px;
  }
  .tabs-demo-title {
    font-size: 24px;
    margin-top: 5px;
  }
}
</style>