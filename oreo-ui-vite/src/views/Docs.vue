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

<style lang="scss">
.docs{
  display: flex;
  padding-left: 12%;
  padding-right: 12%;
  position: relative;
  aside{
    width: 260px;
    height: calc(100vh - 60px);
    padding: 35px 0px 60px 20px;
    position: relative;
    z-index: 99;
    ol{
      list-style: none;
    }
  }
  .docs-content{
    width: 100%;
    height: 88%;
    margin: auto;
    padding: 30px;
    border-radius: 58px;
    background: linear-gradient(145deg, rgba(238, 238, 238, 0.904), #fff);
    box-shadow: -20px -20px 60px #fff,
                20px 20px 60px #D9D9D9;
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