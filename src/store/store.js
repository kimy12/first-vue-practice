import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage={
  fetch(){
    const arr= [];
    //인스턴스가 생성되자마자 호출되는 라이프 사이클 훅
    if (localStorage.length > 0){
      for (let i =0; i<localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          //this.todoItems.push(localStorage.key(i));
        }
      }
    }
    return arr;
  },
}

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  mutations: {
    addOneItem(state, todoItem){
      const obj = {completed: false , item:todoItem};
      localStorage.setItem(todoItem,JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, index){
      localStorage.removeItem(state.item);
      state.todoItems.splice(index, 1);
    },
    toggleOneItem(state, index) {
      //todoItem.completed = !todoItem.completed;
      state.todoItems[index].completed = !state.todoItems[index].completed;
      localStorage.removeItem(state.item);
      localStorage.setItem(state.item, JSON.stringify(state));
    },
    clearAllItems(){
      localStorage.clear();
      this.state.todoItems = [];
    }
  }
});




