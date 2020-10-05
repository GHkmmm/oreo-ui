<template>
  <div>
    <h1>Tabs示例</h1>
    <h2>示例1</h2>
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

<style>

</style>