  const storage={
  fetch(){
    const arr= [];
    //인스턴스가 생성되자마자 호출되는 라이프 사이클 훅
    if (localStorage.length > 0){
      for (let i =0; i<localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          const obj = JSON.parse(localStorage.getItem(i));
          if(obj.deleteYn == false)arr.push(obj);
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
    // key 설정
    let keyNum = 0;
    if (localStorage.length > 0) keyNum = localStorage.length
    const obj = {
      keyNum : keyNum,
      completed: false , 
      editing: false, 
      item:todoItem,
      penIcon : true,
      deleteYn : false
    };
    if(todoItem != ''){
      localStorage.setItem(keyNum,JSON.stringify(obj));
      state.todoItems.push(obj);
    } else {
      this.showModal = !this.showModal;
    } 
  },

  // 글 수정
  updateOneItem(state, payload){
    // 새로 세팅되는 데이터
    const obj = JSON.parse(localStorage.getItem(state.todoItems[payload.index].keyNum));
    
    // const obj = {
    //   keyNum : keyNum,
    //   completed: false , 
    //   editing: false, 
    //   item:payload.formText,
    //   penIcon : true,
    //   deleteYn : false
    // };

    if(state.todoItems[payload.index].editing == false){
      //수정가능한 상태
      state.todoItems[payload.index].editing = !state.todoItems[payload.index].editing;
    } else {
      console.log(payload);
      console.log(state.todoItems);

      state.todoItems[payload.index].editing = !state.todoItems[payload.index].editing;
      localStorage.setItem(payload.todoItem.item, JSON.stringify(obj));
      // state.todoItems.splice(payload.index, 1, obj);\
      state.todoItems.map((e)=> e.item == payload.todoItem.item ? {...e, item: payload.formText} : e);
    }
  },

  //삭제
  removeOneItem(state, payload){
    // state 수정
    state.todoItems[payload.index].deleteYn = !state.todoItems[payload.index].deleteYn;
    state.todoItems.splice(payload.index, 1);
    // localStorage 데이터 수정
    localStorage.removeItem(payload.todoItem.keyNum);
    localStorage.setItem(payload.todoItem.keyNum, JSON.stringify(payload.todoItem));
  },

  //완료여부
  toggleOneItem (state, payload) {
    //todoItem.completed = !todoItem.completed;
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    //아이콘 생성
    state.todoItems[payload.index].penIcon = !state.todoItems[payload.index].penIcon;
    localStorage.removeItem(payload.todoItem.keyNum);
    localStorage.setItem(payload.todoItem.keyNum, JSON.stringify(payload.todoItem));
  },

  clearAllItems () {
      localStorage.clear();
      state.todoItems = [];
    }
  };

  export default {state, getters, mutations}

