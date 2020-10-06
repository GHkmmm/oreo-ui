<template>
  <div class="tab-nav">
    <div class="menu" @click="toggleMenu">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="logo">
      <img src="../assets/logo.png" alt="">
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

<style lang="scss">
.tab-nav{
  width: 90%;
  height: 60px;
  border-radius: 58px;
  background: linear-gradient(170deg, #006fe6cb, #0083ff);
  color: #fff;
  box-shadow: -20px -20px 60px #fff,
              20px 20px 60px #D9D9D9;
  display: flex;
  position: fixed;
  z-index: 95;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
  .menu{
    width: 50px;
    display: none;
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    cursor: pointer;
    div{
      width: 4px;
      height: 4px;
      margin: 3px;
      background-color: #fff;
      border-radius: 100%;
    }
  }
  .logo{
    display: flex;
    margin: auto auto auto 12%;
    img{
      height: 29px;
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
        color: #fff
      }
    }
  }
  @media (max-width:740px) {
    .menu{display: flex;}
    .logo{margin: auto}
    .list{display: none}
  }
}

</style>