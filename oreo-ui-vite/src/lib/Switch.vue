<template>
  <button class="or-switch" @click="toggle" :class="{actived: isOn}">
    <span class="circle"></span>
  </button>
</template>

<script>
export default {
  name: "OrSwitch",
  props:{
    isOn: Boolean
  },
  data() {
    return {
      value: false
    }
  },
  setup(props, context) {
    const toggle = () => {
      console.log(props.isOn);
      context.emit('update:isOn', !props.isOn)
    }
    return {toggle}
  }
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h*2;
  border: none;
  background: #eee;
  border-radius: $h/2;
  position: relative;
  transition: .4s;
  span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    transition: .4s;
  }
}

button.actived {
  background: #28a745;
  span {
    left: calc(100% - #{$h2} - 2px);
  }
}

button:focus {
  outline: none;
}
</style>