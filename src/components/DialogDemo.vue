<template>
  <div class="dialog-demo">
    <header>Dialog组件</header>
    <div class="dialog-demo-title">通过引入组件触发</div>
    <or-button @click="toggle">触发</or-button>
    <or-dialog v-model:visible="visible" 
               :closeOnClickOverlay="false"
               :ok="f1" :cancel="f2">
      我是内容
    </or-dialog>
    <div class="dialog-demo-title">使用openDialog函数触发</div>
    <or-button @click="showDialog">触发</or-button>
  </div>
</template>

<script>
import OrDialog from '../lib/Dialog.vue';
import OrButton from '../lib/Button.vue';
import { ref } from 'vue';

import { openDialog } from '../lib/openDialog';

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

    const f1 = () => {
      return false
    }
    const f2 = () => {}

    return {
      visible,
      toggle,
      f1,
      f2,
      showDialog
    }
  }
}
</script>

<style lang="scss">
.dialog-demo {
  header {
    font-size: 36px;
  }
  .dialog-demo-title {
    font-size: 24px;
    margin-top: 5px;
  }
  * {
    margin: 5px 0;
  }
}
</style>