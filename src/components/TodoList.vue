<template>
  <div>
    <TransitionGroup tag="ul" name="list">
      <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
        <i class="fa-solid fa-check checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete({todoItem, index})"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="btnBox">
          <span class="modifyBtn" v-on:click="modifyTodo({todoItem, index})">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </span>
          <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
            <i class="fa-solid fa-trash-can"></i>
          </span>
        </span>
      </li>
    </TransitionGroup>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods : {
      ...mapMutations({
        removeTodo: 'removeOneItem',
        toggleComplete: 'toggleOneItem'
      })
  },
  computed: {
    // todoItems(){
    //   return this.$store.getters.storedTodoItems
    // }
    ...mapGetters(['storedTodoItems'])
    //만약에 이름이 다른경우?
    // ...mapGetters({ 
    //   todoItems: 'storedTodoItems'
    // })
  }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0px;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .checkBtnCompleted {
    color: #b3adad;
  }
  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }
  .btnBox {
    margin-left: auto;
  }
  .removeBtn {
    /* margin-left: auto; */
    color: #de4343;
  }
  .modifyBtn {
    margin-right: 12px;
    /* margin-left: auto; */
    color: #696969;
  }

  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>