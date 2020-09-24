<template>
  <button class="or-button" 
          :class="classes" 
          :disabled="disabled">
    <slot></slot> 
  </button>
</template>

<script lang="ts">
import { computed } from 'vue';

export default {
  name: 'OrButton',
  // 取消默认绑定
  // inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'nomarl'
    },
    disabled: {
      type: Boolean
    }
  },
  setup(props) {
    const { type, size, disabled } = props
    const classes = computed(() => {
      return {
        [`or-button-${type}`]: type,
        [`or-button-${size}`]: size,
        [`or-button-disabled`]: disabled
      }
    })

    return {
      classes
    }
  }
}
</script>

<style lang="scss">
$h: 32px;
$border-color:#d9d9d9;
$color: #333;
$blue:口 #40a9ff;
$grey: #d9d9d9;
$radius: 4px;
$primary-color: #106cff;
$success-color: #00b246;
$danger-color: #ed0036;
$warning-color: #ffbf00;
.or-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
}
/**
  type属性相关样式
*/
.or-button-primary{
  background-color: $primary-color;
  color: #fff;
}
.or-button-suc{
  background-color: $success-color;
  color: #fff;
}
.or-button-danger{
  background-color: $danger-color;
  color: #fff;
}
.or-button-warn{
  background-color: $warning-color;
  color: #fff;
}
/**
  size属性相关样式
*/
.or-button-big {
  font-size: 24px;
  height: 44px;
  width: 80px;
}
.or-button-small {
  font-size: 8px;
  height: 22px;
  width: 40px;
}
/**
  按钮失效样式
*/
.or-button-disabled {
  cursor: not-allowed;
  color: $grey;
  opacity: .65;
}
</style>