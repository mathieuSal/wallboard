<template>
  <ul class="todoList list">
    <li class="todoListHeaderContainer">
      <div class="todoListHeaderContent">
        <span>
          {{todoList.name}}
        </span>
        <button v-on:click="addAction(todoList.id)">
          Add action
        </button>
      </div>
    </li>
    <ToDoListAction :actions="todoList.list"></ToDoListAction>
  </ul>
</template>

<script>
import ToDoListAction from './ToDoListAction'

export default {
  props: ['todoList'],
  components: {
    ToDoListAction
  },
  data () {
    return {}
  }
}
</script>
