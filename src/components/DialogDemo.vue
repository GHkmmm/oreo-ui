<template>
  <div class="dialog-demo">
    <header>Dialog组件</header>
    <Demo :component="Dialog1Demo" />
    <Demo :component="Dialog2Demo" />
  </div>
</template>

<script>
import Demo from './Demo.vue';
import Dialog1Demo from './DialogDemo/Dialog1.demo.vue';
import Dialog2Demo from './DialogDemo/Dialog2.demo.vue';

export default {
  name: 'OrDialogDemo',
  components: {
    Demo
  },
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo
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