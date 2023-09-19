import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
 state: {
  todos: []
  // LoadingStatus : false
 },
 //computed와 동일한 속성이지만 store에 있는 것임
//  getters: {
//   fetchedAsk(state){
//     return state.ask;
//   },
//   fetchedItem(state){
//     return state.item;
//   }
//  },
 mutations: mutations,
 actions: actions
})