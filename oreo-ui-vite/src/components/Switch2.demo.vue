<template>
  <or-switch v-model="bool" disabled/>
</template>

<script>
import OrSwitch from '../lib/Switch.vue';
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

<style>

</style>