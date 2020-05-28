<template>
  <div>
    <div class="backHome">
      <router-link to="/">
        <p>home</p>
      </router-link>
    </div>
    <div id="todoWidget">
      <p>{{ title }}</p>
      <div class="todoListContainer">
        <ul v-for="todo in todoLists" :key="todo.id" class="todoList list">
          <li class="todoList-name">{{todo.name}}</li>
          <ul class="todoList-action list">
            <li v-for="action in todo.list" :key="action.id"> {{ action.name }}</li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  data () {
    return {
      loading: false,
      title: 'here we will have our todo list component',
      todoLists: [ // used as an example of what we will find on our localstorage
        {
          id: 1,
          name: 'list 1',
          list: [
            {
              id: 1,
              name: 'action 1'
            },
            {
              id: 2,
              name: 'action 2'
            },
            {
              id: 3,
              name: 'action 3'
            }
          ]
        },
        {
          id: 2,
          name: 'list 2',
          list: [
            {
              id: 4,
              name: 'action 1'
            },
            {
              id: 5,
              name: 'action 2'
            },
            {
              id: 6,
              name: 'action 3'
            }
          ]
        }
      ]
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.loading = true
      this.todoLists = localStorage.getItem('ms-wallboard-todolist')
    }
  }
}
</script>

<style scoped>
.backHome {
  left: 1rem;
  position: absolute;
  top: 1rem;
}

.list {
  list-style: none;
}

.todoListContainer {
  display: flex;
  justify-content: center;
  width: 80%;
}

.todoList {
  width: 25%;
}

.todoList-name {
  margin: 0 1rem;
  text-align: left;
}

.todoList-action li {
  background-color: blue;
  color: white;
  font-weight: 600;
  margin: .1rem;
  padding: 0;
}
</style>
