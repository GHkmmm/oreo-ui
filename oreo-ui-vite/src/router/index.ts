import { createWebHashHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue';
import Docs from '../views/Docs.vue';
import IntroduceView from '../components/IntroduceView.vue';
import InstallView from '../components/InstallView.vue';
import StartView from '../components/StartView.vue';
import SwitchDemo from '../components/SwitchDemo.vue';
import ButtonDemo from '../components/ButtonDemo.vue';
import DialogDemo from '../components/DialogDemo.vue';
import TabsDemo from '../components/TabsDemo.vue';

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
          path: 'introduce',
          component: IntroduceView
        },
        {
          path: 'install',
          component: InstallView
        },
        {
          path: 'start',
          component: StartView
        },
        {
          path: '',
          redirect: '/docs/switch'
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