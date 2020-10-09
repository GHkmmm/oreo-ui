<template>
  <div class="or-tabs">
    <div class="or-tabs-nav" ref="container">
      <div class="or-tabs-nav-item" 
           :class="{selected: currentIndex === index}"
           @click="changeTab(index)" 
           v-for="(t, index) in titles" 
           :key="index"
           :ref="el => { if (currentIndex === index) selectedItem = el }">{{t}}</div>
      <div class="or-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="or-tabs-content">
      <component :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script lang="ts">
import OrTab from './Tab.vue';
import { ref, onMounted, watchEffect, computed } from 'vue';

export default {
  name: 'OrTabs',
  setup(props, context) {
    let currentIndex = ref(0)
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    const setIndicator = ()=>{
      // console.log(selectedItem);
      const {width} = selectedItem.value.getBoundingClientRect()
      // console.log(indicator);
      indicator.value.style.width = width + 'px'
      const {left:containerLeft} = container.value.getBoundingClientRect()
      const {left:resultLeft} = selectedItem.value.getBoundingClientRect()
      const left = resultLeft - containerLeft
      indicator.value.style.left = left + 'px'
    }
    onMounted(()=>{
      watchEffect(setIndicator,{flush: 'post'})
    })

    const defaults = context.slots.default()
    const changeTab = (index)=>{
      currentIndex.value = index
    } 
    
    defaults.forEach((tag)=>{
      if(tag.type !== OrTab) {
        throw new Error('The child component of OrTabs must be OrTab')
      }
    })

    const current = computed(()=>{
      return defaults.filter((tag, index) => {
        if(index === currentIndex.value){
          return tag
        }
      })[0]
    })
    const titles = defaults.map((tag) => {
      return tag.props.title
    })

    return {
      defaults,
      current,
      titles,
      currentIndex,
      changeTab,
      selectedItem,
      indicator,
      container
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
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 50px;
      transition: all .25s;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>