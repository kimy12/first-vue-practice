<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keydown.enter="addTodo" placeholder="입력하세요.">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
      </h3>
      <p slot="body">
        내용을 입력하세요
      </p>
      <p slot="footer">
        확인
        <i class="fa-solid fa-circle-check" @click="(showModal = false)"></i>
      </p>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/AlertModal.vue'
import { mapMutations } from 'vuex'

export default {
  data :function (){
    return {
      newTodoItem : "",
      showModal : false
    }
  },
  methods: {
    ...mapMutations({
      addTodo: 'addOneItem',
      clearInput: 'clearAllItems'
    })
  },
  computed:{

  },
  // methods : {
  //   addTodo(){
  //     if (this.newTodoItem != ''){
  //       //this.$emit('이벤트 이름', 인자1, 인자2, 인자3...);
  //       //this.$emit('addTodoItem', this.newTodoItem);
  //       const text = this.newTodoItem.trim();
  //       this.$store.commit('addOneItem', text);
  //       this.clearInput();
  //     } else {
  //       //this.showModal = true;
  //       this.showModal = !this.showModal;
  //     }
  //   },
  //   clearInput(){
  //     this.newTodoItem = '';
  //   }
  // },
  components : {
    Modal
  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float : right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color : white;
    vertical-align: middle;
  }
</style>