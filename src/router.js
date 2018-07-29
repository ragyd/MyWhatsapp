import Vue from 'vue';
import Router from 'vue-router';

import Camera from './components/Camera.vue';
import Chats from './components/Chats.vue';
import Status from './components/Status.vue';
import Calls from './components/Calls.vue';
import Messages from './components/Messages.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/camera',
      name: 'camera',
      component: Camera,
    }, 
    {
      path: '/',
      name: 'chats',
      component: Chats,
      children: [        
      ]
    },
    {
      path: '/status',
      name: 'status',
      component: Status,
    },  
    {
      path: '/calls',
      name: 'calls',
      component: Calls,
    },
    {
      path: '/messages',
      name: 'messages',
      component: Messages,
    },
  ],
});
