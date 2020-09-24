<template>
  <div class="tab-nav">
    <div class="menu" @click="toggleMenu">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="logo">
      <img src="../assets/logo.png" alt="">
      <span>OreoUI</span>
    </div>
    <ul class="list">
      <li><router-link to="/home">主页</router-link></li>
      <li><router-link to="/docs">文档</router-link></li>
      <li>作者</li>
      <li>支持OreoUI</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'

export default {
  name: 'TabNav',
  setup() {
    const menuVisible = inject<Ref<boolean>>
    ('xxx')
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value
    }
    return {toggleMenu}
  }
}
</script>

<style lang="scss" scoped>
.tab-nav{
  width: 100%;
  height: 60px;
  background-color: #fbfbfb;
  color: #26211F;
  box-shadow: 0px 2px 5px #999;
  display: flex;
  position: relative;
  .menu{
    width: 50px;
    display: none;
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    cursor: pointer;
    div{
      width: 25px;
      height: 3px;
      margin: 4px;
      background-color: #666;
    }
  }
  .logo{
    display: flex;
    margin: auto auto auto 12%;
    img{
      height: 40px;
    }
    span{
      line-height: 40px;
      margin-left: 10px;
      font-size: 24px;
    }
  }
  .list{
    width: 500px;
    display: flex;
    align-items: center;
    list-style: none;
    margin-left: auto;
    margin-right: 12%;
    li{
      flex: 1;
      cursor: pointer;
      a{
        text-decoration: none;
        color: #26211F
      }
    }
  }
  @media (max-width:740px) {
    .menu{display: inline-block}
    .logo{margin: auto}
    .list{display: none}
  }
}

</style>