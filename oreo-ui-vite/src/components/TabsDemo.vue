<template>
  <div class="tabs-demo">
    <header>Tabs示例</header>
    <div class="tabs-demo-title">示例1</div>
    <or-tabs>
      <or-tab title="导航1">内容1</or-tab>
      <or-tab title="标题较长的导航2">内容2</or-tab>
    </or-tabs>
  </div>
</template>

<script lang="ts">
import OrTabs from '../lib/Tabs.vue';
import OrTab from '../lib/Tab.vue';

export default {
  name: 'TabsDemo',
  components: {
    OrTabs,
    OrTab
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