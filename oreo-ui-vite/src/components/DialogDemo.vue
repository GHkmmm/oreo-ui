<template>
  <div>
    <or-button @click="toggle">触发</or-button>
    <or-dialog v-model:visible="visible" 
               :closeOnClickOverlay="false"
               :ok="f1" :cancel="f2">
      我是内容
    </or-dialog>
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
    const f1 = () => {
      return false
    }
    const f2 = () => {}

    return {
      visible,
      toggle,
      f1,
      f2
    }
  }
}
</script>

<style>

</style>