import { 
  fetchTodoList
} from '../api/index.js';

export default {
  FETCH_TODOS(context){
    fetchTodoList()
    .then(response => {
      context.commit('SET_TODOS', response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }
}

