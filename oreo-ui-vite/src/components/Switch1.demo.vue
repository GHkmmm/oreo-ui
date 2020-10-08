<demo>
常规用法
</demo>

<template>
  <or-switch v-model:value="bool" />
</template>

<script>
import OrSwitch from '../lib/Switch.vue';
import { ref } from 'vue';

export default {
  components: {
    OrSwitch
  },
  setup() {
    const bool = ref(false)

    return {
      bool
    }
  }
}
</script>