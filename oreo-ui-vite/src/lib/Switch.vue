<template>
  <div class="or-switch" @click="toggle" :class="{actived: isOn}">
    <div class="circle"></div>
  </div>
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
.or-switch{
  width: 50px;
  height: 25px;
  background-color: #eee;
  border-radius: 20px;
  position: relative;
  transition: .6s;
}
.circle{
  width: 23px;
  height: 23px;
  border-radius: 100%;
  background-color: #fff;
  position: absolute;
  top: 1px;
  left: 2px;
  transition: .3s;
}
</style>