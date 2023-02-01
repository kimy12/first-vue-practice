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
  
  const state= {
    todoItems: storage.fetch()
  };

  const getters = {
    storedTodoItems (state){
    return state.todoItems;
    }
  };
  const mutations = {

    addOneItem(state, todoItem) {
    const obj = {
      completed: false , 
      editing: false, 
      item:todoItem,
      penIcon : true
    };
    if(todoItem != ''){
      localStorage.setItem(todoItem,JSON.stringify(obj));
      state.todoItems.push(obj);
    } else {
      this.showModal = !this.showModal;
    } 
  },

  // 글 수정
  updateOneItem(state, payload){
    // 새로 세팅되는 데이터
    // const obj = {completed: false , editing: false, item:state.todoItems[payload.index].item};
    //수정가능한 상태
    state.todoItems[payload.index].editing = !state.todoItems[payload.index].editing;
    // localStorage.removeItem(payload.todoItem.item);
    // state.todoItems.splice(payload.index, 1);
  },

  removeOneItem(state, payload){
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
  },

  toggleOneItem (state, payload) {
    //todoItem.completed = !todoItem.completed;
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    //아이콘 생성
    state.todoItems[payload.index].penIcon = !state.todoItems[payload.index].penIcon;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
  },

  clearAllItems () {
      localStorage.clear();
      state.todoItems = [];
    }
  };

  export default {state, getters, mutations}

