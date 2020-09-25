<template>
  <transition name="container-transition">
    <div class="or-dialog-container" v-show="visible">
      <transition name="dialog-transition">
        <div class="or-dialog" v-show="visible">
          <header class="or-dialog-header">
            <slot name="title">
              <span class="or-dialog-title">
                {{title}}
              </span>
            </slot>
            <i class="or-dialog-close" @click="closeDialog"></i>
          </header>
          <main class="or-dialog-content">
            <slot>
            </slot>
          </main>
          <footer class="or-dialog-footer">
            <slot name="footer">
              <or-button type="primary">OK</or-button>
              <or-button>Cancel</or-button>
            </slot>
          </footer>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script lang-"ts">
import OrButton from './Button.vue';

export default {
  name: 'OrDialog',
  components: {
    OrButton
  },
  props: {
    top: {
      type: String,
      default: 'auto'
    },
    title: {
      type: String,
      default: '标题'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const closeDialog = () => {
      this
    }

    return {
      closeDialog
    }
  }
}
</script>

<style lang="scss">
$radius: 8px;
$border-color: #d9d9d9;

.or-dialog-container{
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, .3);
  .or-dialog{
    width: 40%;
    min-width: 300px;
    height: auto;
    background-color: #fff;
    border-radius: $radius;
    opacity: 1;
    position: relative;
    top: 100px;
    z-index: 99;
    margin: auto;
    .or-dialog-header{
      padding: 20px 20px 10px;
      .or-dialog-title{
        line-height: 24px;
        font-size: 18px;
        display: flex;
      }
      .or-dialog-close{
        position: absolute;
        top: 15px;
        right: 20px;
        cursor: pointer;
        font-size: 24px;
        color: #666;
        &::before,
        &::after {
          content: '' ;
          display: inline-block;
          width: 1px;
          height: 18px;
          background-color: #000;
        }
        &::before {
          transform: rotate(45deg)
        }
        &::after {
          transform: rotate(-45deg)
        }
      }
    }
    .or-dialog-content{
      padding: 10px 20px;
    }
    .or-dialog-footer{
      padding: 5px 20px 10px;
      text-align: right;
      margin-top: auto;
      box-sizing: border-box;
    }
  }
}
.dialog-transition-enter-active {
  animation: scale .3s;
}
.dialog-transition-leave-active {
  animation: scale .3s reverse;
}
.container-transition-enter-active{
  animation: fade .3s;
}
.container-transition-leave-active{
  animation: fade .3s reverse;
}
@keyframes scale {
  0%{
    transform: scale(.1);
  }
  100%{
    transform: scale(1);
  }
}
@keyframes fade {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>