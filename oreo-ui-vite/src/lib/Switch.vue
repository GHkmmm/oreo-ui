<template>
  <button class="or-switch" @click="toggle" :class="{'or-actived': isOn}">
    <span></span>
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

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.or-switch {
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

.or-switch.or-actived {
  background: #28a745;
  span {
    left: calc(100% - #{$h2} - 2px);
  }
}

.or-switch:focus {
  outline: none;
}
</style>