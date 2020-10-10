<demo>
  通过引入组件触发
</demo>

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
import { OrDialog, OrButton } from '../../lib/index'
import { ref } from 'vue';

export default {
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

    return{
      f1,
      f2,
      visible,
      toggle
    }
  }
}
</script>

<style>

</style>