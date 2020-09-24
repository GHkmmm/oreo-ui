<template>
  <div class="docs">
    <aside v-if="menuVisible">
      <h2>组件列表</h2>
      <ol>
        <li><router-link to="/docs/switch">Switch组件</router-link></li>
        <li><router-link to="/docs/button">Button组件</router-link></li>
        <li><router-link to="/docs/dialog">Dialog组件</router-link></li>
        <li><router-link to="/docs/tabs">Tabs组件</router-link></li>
      </ol>
    </aside>
    <router-view class="docs-content"></router-view>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'

export default {
  name: 'Docs',
  setup() {
    const menuVisible = inject<Ref<boolean>>
    ('xxx')
    return {menuVisible}
  }
}
</script>

<style lang="scss" scoped>
.docs{
  display: flex;
  padding-left: 12%;
  padding-right: 12%;
  position: relative;
  aside{
    width: 260px;
    height: calc(100vh - 60px);
    padding: 35px 0px 60px 20px;
    border-right: 1px solid #eee;
    background: #eee;
    position: absolute;
    z-index: 99;
    ol{
      list-style: none;
    }
  }
  .docs-content{
    width: 100%;
    padding: 10px;
  }
  @media (max-width: 740px) {
    aside{
      position: fixed;
      top: 60px;
      left: 0;
    }
  }
}
</style>