<template>
  <div>
    <h2>Button示例</h2>
    <or-button>示例</or-button>
    <or-button theme="button">示例</or-button>
    <or-button theme="link">示例</or-button>
    <or-button theme="text">示例</or-button>
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