<template>
  <div>
    <div v-for="(t, index) in titles" :key="index">{{t}}</div>
    <component v-for="(c, index) in defaults" :is="c" :key="index" />
    <!-- <slot></slot> -->
  </div>
</template>

<script>
import OrTab from './Tab.vue';

export default {
  name: 'OrTabs',
  setup(props, context) {
    const defaults = context.slots.default()
    
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
      titles
    }
  }
}
</script>

<style>

</style>