<template>
  <div class="button-demo">
    <header>Button示例</header>
    <div class="button-demo-title">不同类型</div>
    <div>
      <or-button>示例</or-button>
      <or-button type="primary">示例</or-button>
      <or-button type="suc">示例</or-button>
      <or-button type="danger">示例</or-button>
      <or-button type="warn">示例</or-button>
    </div>
    <div><or-button type="primary">查看代码</or-button></div>
    <div class="button-demo-title">不同size</div>
    <div>
      <or-button size="big">示例</or-button>
      <or-button>示例</or-button>
      <or-button size="small">示例</or-button>
    </div>
    <div>
      <or-button type="primary" size="big">示例</or-button>
      <or-button type="primary">示例</or-button>
      <or-button type="primary" size="small">示例</or-button>
    </div>
    <div>
      <or-button type="suc" size="big">示例</or-button>
      <or-button type="suc">示例</or-button>
      <or-button type="suc" size="small">示例</or-button>
    </div>
    <div><or-button type="primary">查看代码</or-button></div>
    <div class="button-demo-title">disabled状态</div>
    <div>
      <or-button disabled>示例</or-button>
      <or-button type="primary" disabled>示例</or-button>
      <or-button type="suc" disabled>示例</or-button>
    </div>
    <div><or-button type="primary">查看代码</or-button></div>
    <div class="button-demo-title">加载状态</div>
    <div>
      <or-button loading>加载中</or-button>
      <or-button>加载完毕</or-button>
    </div>
  </div>
</template>

<script lang="ts">
import OrButton from '../lib/Button.vue';

export default {
  name: 'ButtonDemo',
  components: {
    OrButton
  },
  setup() {
    
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