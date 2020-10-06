<template>
  <div class="home">
    <div class="main">
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
    <div class="bottom">
      <div class="vue">
        <img src="../assets/img/home/vue.png" alt="">
        <span>基于Vue3.0</span>
      </div>
      <div class="ts">
        <img src="../assets/img/home/ts.png" alt="">
        <span>基于TypeScript</span>
      </div>
      <div class="easy">
        <img src="../assets/img/home/easy.png" alt="">
        <span>简单易用</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
  overflow: hidden;
  .main {
    width: 90%;
    margin: 0 auto;
    border-radius: 58px;
    background: linear-gradient(135deg, #eee, #fff);
    box-shadow: -20px -20px 60px #fff,
                20px 20px 60px #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    .logo{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
    }
    .title{
      font-size: 54px;
      font-weight: 700;
    }
    .desc{
      font-size: 28px;
    }
    .home-btn-group{
      display: flex;
      align-items: center;
    }
    .go-github-btn,
    .go-docs-btn{
      width: 144px;
      line-height: 52px;
      text-align: center;
      border-radius: 8px;
      font-size: 17px;
      padding: 4px 10px 4px 10px;
      cursor: pointer;
      a{
        text-decoration: none;
      }
    }
    .go-github-btn{
      background-color: #007aff;
      &:hover{
        background-color: #0071e3;
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
  }
  .bottom {
    width: 90%;
    margin: 0 auto;
    border-radius: 58px;
    background: linear-gradient(135deg, #eee, #fff);
    box-shadow: -20px -20px 60px #fff,
                20px 20px 60px #D9D9D9;
    display: flex;
    justify-content:space-around;
    align-items: center;
    font-size: 18px;
    * {
      img{
        vertical-align: middle;
      }
    }
  }
}
@media (min-width:740px) {
  .main {
    height: 500px;
    *{
      margin: 14px;
    }
    .logo {
      img {
        height: 175px;
      }
    }
  }
  .bottom {
    height: 150px;
    * {
      img {
        height: 88px;
      }
    }
  }
}
@media (max-width:740px) {
  .main {
    height: 75%;
    flex-direction: column;
    * {
      margin: 5px;
    }
    .logo{
      img {
        width: 171px;
      }
    }
    .other {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      * {
        margin: 5px;
      }
      .title{
        font-size: 48px;
        font-weight: 700;
      }
      .desc{
        font-size: 21px;
      }
      .go-github-btn,
      .go-docs-btn {
        width: 115px;
        height: 42px;
      }
    }
  }
  .bottom {
    height: 18%;
    .ts,
    .easy {
      display: none;
    }
    * {
      img {
        height: 64px;
      }
    }
  }
}
</style>