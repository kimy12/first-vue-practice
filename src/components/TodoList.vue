<template>
  <div>
    <TransitionGroup tag="ul" name="list">
      <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.keyNum" class="shadow">
        <i class="fa-solid fa-check checkBtn" 
           v-bind:class="{checkBtnCompleted: todoItem.completed}" 
           v-on:click="toggleComplete({todoItem, index})"></i>
        <span class="btnBox">
          <input type="text" 
                :value="todoItem.item"
                @input="updateMessage({ todoItem, index }, $event.target.value)"
                v-on:keydown.enter="$event.target.blur()"
                @blur="modifyTodo(updateMessage({ todoItem, index }, $event.target.value))"
                :class="{textCompleted: todoItem.completed, modifyNow: todoItem.editing}"
                v-if="todoItem.editing"
                > 
          <span v-if="!todoItem.editing" 
                :class="{textCompleted: todoItem.completed, modifyNow: todoItem.editing}">
            {{ todoItem.item }}
          </span>
          <transition name="fade"> 
            <span v-if="todoItem.penIcon" ref="editing" class="modifyBtn" v-on:click="modifyTodo({todoItem, index})">
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </span>
            <span v-if="!todoItem.penIcon" class="modifyBtn" v-on:click="modifyTodo({todoItem, index})">
              <i class="fa-solid fa-xmark"></i>
            </span>
          </transition>
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
        modifyTodo: 'updateOneItem',
        toggleComplete: 'toggleOneItem'
      }),
      updateMessage(payload, item){
        const text = item.trim();
        payload.formText = text;
        return payload;
      }
  },
  computed: {
    // todoItems(){
    //   return this.$store.getters.storedTodoItems
    // }
    ...mapGetters(['storedTodoItems'])
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
    position: relative;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
    cursor: pointer;
  }
  .checkBtnCompleted {
    color: #b3adad;
  }
  input {
    border-style: none;
    font-size: 0.9rem;
  }
  input:focus {
    outline: none;
  }
  /* .checkBtnCompleted input {
    pointer-events:none;
    
  } */
  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }
  .modifyNow {
    /* pointer-events:painted; */
  }
  .btnBox span{
    font-size: 0.9rem
  } 
  .removeBtn {
    position: absolute;
    color: #A8BFFF;
    right: 14px;
    cursor: pointer;
  }
  .modifyBtn {
    color: #696969;
    position: absolute;
    right: 39px;
    cursor: pointer;
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