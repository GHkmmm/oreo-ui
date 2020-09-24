<template>
  <div>
    <or-switch v-model:isOn="isOn"/>
  </div>
</template>

<script>
import OrSwitch from '../lib/Switch.vue';
import { ref } from 'vue';

export default {
  name: 'SwitchDemo',
  components: {
    OrSwitch
  },
  setup() {
    const isOn = ref(false)
    return {isOn}
  }
}
</script>

<style>

</style>