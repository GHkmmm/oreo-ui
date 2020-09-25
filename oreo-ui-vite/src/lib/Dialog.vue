<template>
  <div class="or-dialog">
    <div class="or-dialog-overlay"></div>
    <div class="or-dialog-wrapper">
      <header>标题</header>
      <main>内容</main>
      <footer>
        <or-button type="primary">OK</or-button>
        <or-button>NO</or-button>
      </footer>
    </div>
  </div>
</template>

<script lang-"ts">
import OrButton from './Button.vue';

export default {
  name: 'OrDialog',
  components: {
    OrButton
  }
}
</script>

<style>

</style>