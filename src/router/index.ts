import { createWebHashHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue';
import Docs from '../views/Docs.vue';
import SwitchDemo from '../components/SwitchDemo.vue';
import ButtonDemo from '../components/ButtonDemo.vue';
import DialogDemo from '../components/DialogDemo.vue';
import TabsDemo from '../components/TabsDemo.vue';
import Markdown from '../components/Markdown.vue';
import { h } from 'vue';

import install from '../markdown/install.md';
import intro from '../markdown/intro.md';
import start from '../markdown/start.md';

const md = (markdown, key) => h(Markdown, {content: markdown, key})

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/docs',
      component: Docs,
      children: [
        {
          path: 'intro',
          component: md(intro, 'intro')
        },
        {
          path: 'install',
          component: md(install, 'install')
        },
        {
          path: 'start',
          component: md(start, 'start')
        },
        {
          path: '',
          redirect: '/docs/intro'
        },
        {
          path: 'switch',
          component: SwitchDemo
        },
        {
          path: 'button',
          component: ButtonDemo
        },
        {
          path: 'dialog',
          component: DialogDemo
        },
        {
          path: 'tabs',
          component: TabsDemo
        }
      ]
    }
  ]
})

router.afterEach(()=>{
  
})

export default router;