<template>
  <div>
    <div class="backHome">
      <router-link to="/">
        <p>home</p>
      </router-link>
    </div>
    <div id="todoWidget">
      <p>{{ title }}</p>
      <div class="todoList addButton">
        <button v-on:click="addList">Add list</button>
      </div>
      <div class="todoListContainer">
        <div class="todoListContent">
          <ul v-for="todo in todoLists" :key="todo.id" class="todoList list">
            <li class="todoList-name">{{todo.name}}</li>
            <ul class="todoList-action list">
              <li v-for="action in todo.list" :key="action.id"> {{ action.name }}</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  data () {
    return {
      title: 'here we will have our todo list component',
      todoLists: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      const historic = localStorage.getItem('ms-wallboard-todoList')
      this.todoLists = historic !== null ? JSON.parse(historic) : []
    },
    addList () {
      this.todoLists = [
        ...this.todoLists,
        {
          id: this.todoLists.length,
          name: `list ${this.todoLists.length}`,
          list: []
        }
      ]
      localStorage.setItem('ms-wallboard-todoList', JSON.stringify(this.todoLists))
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
  width: 100%;
}

.todoListContent {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 80%;
}

.todoList {
  width: 25%;
}

.addButton {
  display: flex;
  padding-left: 40px;
  margin-left: 1rem;
  align-items: center;
}

.addButton button {
  width: 80px;
  height: 20px;
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
