  const addOneItem = (state, todoItem) => {
    const obj = {completed: false , item:todoItem};
    localStorage.setItem(todoItem,JSON.stringify(obj));
    state.todoItems.push(obj);
  }

  const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
  }

  const toggleOneItem = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
  }

  const clearAllItems = () => {
    localStorage.clear();
    this.state.todoItems = [];
  }

  // 글 수정
  const updateOneItem = (state, payload) => {
    // 새로 세팅되는 데이터
    // const obj = {completed: false , editing: false, item:state.todoItems[payload.index].item};
    console.log(state);
    console.log(payload);
    //수정가능한 상태
    state.todoItems[payload.index].editing = !state.todoItems[payload.index].editing;
    //ref.$refs.editing.focus();
    // localStorage.removeItem(payload.todoItem.item);
    // state.todoItems.splice(payload.index, 1);
  }

  export { addOneItem, removeOneItem, toggleOneItem, clearAllItems, updateOneItem}