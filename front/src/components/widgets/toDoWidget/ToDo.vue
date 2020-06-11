<template>
  <div class="todoBody">
    <home-component/>
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
          <li
            class="todo" :class="{completed: todo.completed, editing: editing && editing.id === todo.id}"
            v-for="todo in filteredTodos" :key="todo.id"
          >
            <div class="view">
              <input type="checkbox" class="toggle" :checked="todo.completed" @click="checkTodo(todo)">
              <label @dblclick="editingTodo(todo)">{{todo.name}}</label>
              <button class="destroy" @click.prevent="deleteTodos(todo.id)"></button>
            </div>
            <input type="text" class="edit"
              :value="editing ? editing.name : ''"
              @input="updateEditingTodo"
              @keyup.enter="editTodo(editing)" @keyup.esc="editingTodo(null)"
            >
          </li>
        </ul>
      </div>
      <footer class="footer" v-show="hasTodos">
        <span class="todo-count"> <strong>{{remainingTodosCount}}</strong> Tâches à faire</span>
        <ul class="filters">
          <li><a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">Toutes</a></li>
          <li><a href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'">A faire</a></li>
          <li><a href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Faites</a></li>
        </ul>
        <button
          class="clear-completed"
          @click.prevent="deleteAllCompleted"
          v-show="completedTodosCount > 0"
        >Supprimer les tâches finies</button>
      </footer>
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
    return {
      filter: 'all'
    }
  },
  computed: {
    ...Vuex.mapGetters([
      'newTodo',
      'editing',
      'todos',
      'remainingTodos',
      'remainingTodosCount',
      'completedTodos',
      'completedTodosCount'
    ]),
    filteredTodos () {
      if (this.filter === 'todo') {
        return this.remainingTodos
      } else if (this.filter === 'done') {
        return this.completedTodos
      } else {
        return this.todos
      }
    },
    hasTodos () {
      return this.todos.length > 0
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    ...Vuex.mapActions([
      'fetchData',
      'updateNewTodo',
      'addTodo',
      'editingTodo',
      'updateEditingTodo',
      'editTodo',
      'checkTodo',
      'deleteTodos',
      'deleteAllCompleted'
    ])
  }
}
</script>

<style src='./style/todo.css'></style>
