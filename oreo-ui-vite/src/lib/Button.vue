<template>
  <div :size="size">
    <button v-bind="rest">
      <slot></slot> 
    </button>
  </div>
</template>

<script>
export default {
  name: 'OrButton',
  // 取消默认绑定
  inheritAttrs: false,
  setup(props, context) {
    // 获取所有属性 并分成两个部分
    const { size, ...rest } = context.attrs

    return {
      size,
      rest
    }
  }
}
</script>

<style>

</style>