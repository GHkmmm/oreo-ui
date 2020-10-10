![logo](https://tva1.sinaimg.cn/large/007S8ZIlgy1gh95tgeoy5j30590450sm.jpg)

<center><h1>OreoUI</h1></center>

<center>基于Vue3.0+TypeScript构建的UI组件库</center>

<div style="display:flex;justify-content:center;">
  🔥<a style="margin-right:20px" href="https://ghkmmm.gitee.io/oreo-neuui">官方文档</a>
  🚀<a href="https://www.npmjs.com/package/oreo-neuui">npm</a>
</div>



## 安装

打开终端运行下列命令：

```
npm install oreo-neuui
```



或

```
yarn add oreo-neuui
```



##  开始使用

请先[安装]()本组件库

然后在你的代码中写入下面的代码

```js
import { OrButton, OrTabs, OrSwitch, OrDialog, openDialog } from "oreo-neuui"
```

就可以使用我提供的组件了

#### Vue 单文件组件

代码示例

```vue
<template>
  <div>
    <or-button>按钮</or-button>
  </div>
</template>

<script>
import { OrButton, OrTabs, OrSwitch, OrDialog, openDialog } from "oreo-neuui"

export default {
  components: {OrButton}
}

</script>
```



详细使用教程请查看[官方文档](https://ghkmmm.gitee.io/oreo-neuui)

