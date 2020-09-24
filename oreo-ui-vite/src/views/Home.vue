<template>
  <div class="home">
    <div class="logo">
      <img src="../assets/logo.png" alt="">
    </div>
    <div class="other">
      <p class="title">OreoUI</p>
      <p class="desc">基于Vue3.0构建的UI组件库</p>
      <div class="home-btn-group">
        <div class="go-github-btn">
          <a href="https://github.com/GHkmmm">GitHub</a>
        </div>
        <div class="go-docs-btn">
          <router-link to="/docs">开始</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.home{
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 100px;
  overflow: hidden;
  *{
    margin: 14px;
  }
}
.logo{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  img{
    height: 175px;
  }
}
.title{
  font-size: 54px;
  font-weight: 700;
}
.desc{
  font-size: 28px;
  color: #06c;
}
.home-btn-group{
  display: flex;
  align-items: center;
}
.go-github-btn,
.go-docs-btn{
  width: 100px;
  line-height: 50px;
  border-radius: 10px;
  text-align: center;
  border-radius: 18px;
  box-sizing: border-box;
  font-size: 17px;
  padding: 4px 10px 4px 10px;
  cursor: pointer;
  a{
    text-decoration: none;
  }
}
.go-github-btn{
  background-color: #0071e3;
  &:hover{
    background-color: #06c;
    transition: .3s;
  }
  a{
    color: #fff;
  }
}
.go-docs-btn{
  background-color: #fff;
  border: 1px solid #0071e3;
  &:hover{
    background-color: #eee;
    transition: .3s;
  }
  a{
    color: #0071e3;
  }
}
</style>