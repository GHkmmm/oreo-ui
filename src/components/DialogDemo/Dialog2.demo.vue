<demo>
  使用openDialog函数触发
</demo>

<template>
  <or-button @click="showDialog">触发</or-button>
</template>

<script>
import OrDialog from '../../lib/Dialog.vue'
import OrButton from '../../lib/Button.vue';
import { ref } from 'vue';

import { openDialog } from '../../lib/openDialog';

export default {
  components: {
    OrDialog,
    OrButton
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: '我是标题',
        content: '我是内容',
        ok() {
          return false
        },
        cancel() {
          
        }
      })
    }

    return {
      showDialog,
    }
  }
}
</script>

<style>

</style>