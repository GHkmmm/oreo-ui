<template>
  <div>
    Button示例
    <or-button @click="onClick"
               @mousemove="onClick"
               @focus="onClick"
               size="small">示例</or-button>
  </div>
</template>

<script>
import OrButton from '../lib/Button.vue';

export default {
  name: 'ButtonDemo',
  components: {
    OrButton
  },
  setup() {
    const onClick = () => {
      console.log(111);
    }

    return {
      onClick
    }
  }
}
</script>

<style>

</style>