<template>
  <div>
    <div>Button示例</div>
    <h2>示例1</h2>
    <div>
      <or-button>示例</or-button>
      <or-button type="primary">示例</or-button>
      <or-button type="suc">示例</or-button>
      <or-button type="danger">示例</or-button>
      <or-button type="warn">示例</or-button>
    </div>
    <h2>示例2</h2>
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
    <h2>示例3</h2>
    <div>
      <or-button disabled>示例</or-button>
      <or-button type="primary" disabled>示例</or-button>
      <or-button type="suc" disabled>示例</or-button>
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

<style>

</style>