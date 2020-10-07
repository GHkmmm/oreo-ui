<template>
  <div class="docs">
    <aside v-if="menuVisible">
      <h2>文档</h2>
      <ol>
        <li><router-link to="/docs/introduce">介绍</router-link></li>
        <li><router-link to="/docs/install">安装</router-link></li>
        <li><router-link to="/docs/start">开始使用</router-link></li>
      </ol>
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
  width: 90%;
  margin: auto;
  position: relative;
  aside{
    width: 260px;
    padding: 35px 0px 60px 50px;
    position: relative;
    z-index: 99;
    box-sizing: border-box;
    h2 {
      margin-top: 20px;
    }
    ol{
      list-style: none;
      li {
        text-indent: 2em;
        margin: 5px;
        a {
          text-decoration: none;
          color: #000;
        }
        .router-link-active {
          color: #007aff
        }
      }
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