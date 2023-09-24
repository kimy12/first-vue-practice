import Vue from 'vue';
import VueRouter from 'vue-router'; 
//import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode : 'history',
  routes:[
    {
      path: '/',
      redirect: '/api/v1',
    },
    {
      path: '/todo',
      name: 'todo'
      // component: 
    }
  ]
});