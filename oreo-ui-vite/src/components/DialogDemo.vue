<template>
  <div>
    <or-button @click="toggle">触发</or-button>
    <or-dialog :visible="visible"></or-dialog>
  </div>
</template>

<script>
import OrDialog from '../lib/Dialog.vue';
import OrButton from '../lib/Button.vue';
import { ref } from 'vue';

export default {
  name: 'OrDialogDemo',
  components: {
    OrDialog,
    OrButton
  },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value
    }

    return {
      visible,
      toggle
    }
  }
}
</script>

<style>

</style>