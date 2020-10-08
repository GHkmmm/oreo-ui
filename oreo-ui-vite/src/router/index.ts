import { createWebHashHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue';
import Docs from '../views/Docs.vue';
import SwitchDemo from '../components/SwitchDemo.vue';
import ButtonDemo from '../components/ButtonDemo.vue';
import DialogDemo from '../components/DialogDemo.vue';
import TabsDemo from '../components/TabsDemo.vue';
import Markdown from '../components/Markdown.vue';
import { h } from 'vue';

const md = filename => h(Markdown, {path:`../markdown/${filename}.md`, key: filename})

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
          component: md('intro')
        },
        {
          path: 'install',
          component: md('install')
        },
        {
          path: 'start',
          component: md('start')
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