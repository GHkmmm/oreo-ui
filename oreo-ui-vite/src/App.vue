<template>
  <div>
    <tab-nav />
    <router-view class="router-view" />
  </div>
</template>

<script lang="ts">
import TabNav from './components/TabNav.vue';
import { provide, ref } from 'vue';
import router from './router';

export default {
  name: 'App',
  components: {
    TabNav
  },
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 740 ? false : true)
    provide('xxx', menuVisible) // 标记为所有后代均可使用menuVisible这个变量
    router.afterEach(()=>{
      if(width<=740){
        menuVisible.value = false
      }
    })
  }
}
</script>

<style lang="scss">
$top: 110px;

.router-view {
  height: calc(100vh - #{$top});
  position: relative;
  top: $top;
}
</style>
