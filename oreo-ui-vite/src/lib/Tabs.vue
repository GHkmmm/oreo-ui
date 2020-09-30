<template>
  <div class="or-tabs">
    <div class="or-tabs-nav">
      <div class="or-tabs-nav-item" 
           :class="{selected: currentIndex === index}"
           @click="changeTab(index)" 
           v-for="(t, index) in titles" 
           :key="index">{{t}}</div>
    </div>
    <div class="or-tabs-content">
      <component v-for="(c, index) in defaults" 
                 :is="c" 
                 :key="index"
                 class="or-tabs-content-item"
                 :class="{selected: currentIndex === index}" />
    </div>
  </div>
</template>

<script>
import OrTab from './Tab.vue';
import { ref } from 'vue';

export default {
  name: 'OrTabs',
  setup(props, context) {
    let currentIndex = ref(0)
    const defaults = context.slots.default()
    const changeTab = (index)=>{
      currentIndex.value = index
    } 
    
    defaults.forEach((tag)=>{
      if(tag.type !== OrTab) {
        throw new Error('The child component of OrTabs must be OrTab')
      }
    })

    const titles = defaults.map((tag) => {
      return tag.props.title
    })

    return {
      defaults,
      titles,
      currentIndex,
      changeTab
    }
  }
}
</script>

<style lang="scss">
$blue: #0071e3;
$color: #333;
$border-color: #d9d9d9;

.or-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>