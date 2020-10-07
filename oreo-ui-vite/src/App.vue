<template>
  <div>
    <tab-nav :toggleMenuButtonVisible="toggleMenuButtonVisible" />
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
    let toggleMenuButtonVisible = ref<Boolean>(false);
    const menuVisible = ref(width <= 740 ? false : true)
    provide('xxx', menuVisible) // 标记为所有后代均可使用menuVisible这个变量
    router.afterEach((to)=>{
      if(width<=740){
        menuVisible.value = false
      }
      toggleMenuButtonVisible.value = to.path.match(/\/docs\//)?true:false
    })

    return {
      toggleMenuButtonVisible
    }
  }
}
</script>

<style lang="scss">
$top: 100px;

.router-view {
  height: calc(100vh - #{$top});
  position: relative;
  top: $top;
}
</style>
