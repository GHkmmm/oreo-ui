<demo>
  使用openDialog函数触发
</demo>

<template>
  <or-button @click="showDialog">触发</or-button>
</template>

<script>
import { OrDialog, OrButton, openDialog } from '../../lib/index'
import { ref } from 'vue';

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