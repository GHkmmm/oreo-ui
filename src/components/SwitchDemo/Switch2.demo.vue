<demo>
  支持disabled
</demo>

<template>
  <or-switch v-model="bool" disabled/>
</template>

<script>
import { OrSwitch } from '../../lib/index';
import { ref } from 'vue';

export default {
  components: {
    OrSwitch
  },
  setup() {
    const bool = ref(true)
    return {
      bool
    }
  }
}
</script>