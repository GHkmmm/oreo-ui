<demo>
常规用法
</demo>

<template>
  <or-switch v-model:isOn="bool" />
</template>

<script>
import { OrSwitch } from '../../lib/index';
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