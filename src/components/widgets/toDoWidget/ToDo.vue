<template>
  <div>
    <HomeComponent/>
    <section class="todoapp">
      <header class="header">
        <h1>todo</h1>
        <input type="text" class="new-todo" placeholder="Ajouter une tâche"
          :value="newTodo" @input="updateNewTodo"
          @keyup.enter="addTodo(newTodo)"
        >
      </header>
      <div class="main">
        <ul class="todo-list">
          <li class="todo" :class="{completed: todo.completed}" v-for="todo in todos" :key="todo.id">
            <div class="view">
              <input type="checkbox" class="toggle" :checked="todo.completed" @click="checkTodo(todo.id)">
              <label>{{todo.name}}</label>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import HomeComponent from '../../generic/homeComponent/HomeComponent'
import store from '../../../store/wallboardStore'
import Vuex from 'vuex'

export default {
  name: 'ToDo',
  store,
  components: {
    HomeComponent
  },
  data: function () {
    return {}
  },
  computed: {
    ...Vuex.mapGetters(['newTodo', 'todos'])
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    ...Vuex.mapActions([
      'fetchData',
      'updateNewTodo',
      'addTodo',
      'checkTodo'
    ])
  }
}
</script>

<style src='./style/todo.css'></style>
