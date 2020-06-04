<template>
  <div>
    <HomeComponent/>
    <div id="todoWidget">
      <p>{{ title }}</p>
      <div class="todoList addButton">
        <button v-on:click="addList">Add list</button>
      </div>
      <div class="todoListContainer">
        <div class="todoListContent">
          <TodoList v-for="todoList in todoLists" :todoList="todoList" :key="todoList.id"></TodoList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeComponent from '../../generic/homeComponent/HomeComponent'
import TodoList from './ToDoList'

const storage = 'ms-wallboard-todoList'

export default {
  name: 'ToDo',
  components: {
    HomeComponent,
    TodoList
  },
  data: function () {
    return {
      title: 'here we will have our todo list component',
      todoLists: []
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      const historic = localStorage.getItem(storage)
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
      this.persist()
    },
    addAction (id) {
      this.todoLists = this.todoLists.map(todoList => {
        if (todoList.id === id) {
          return {
            ...todoList,
            list: [
              ...todoList.list,
              {
                id: this.todoLists.reduce((prev, curr) => [...prev, ...curr.list], []).length,
                name: `action ${todoList.list.length}`
              }
            ]
          }
        }
        return todoList
      })
      this.persist()
    },
    persist () {
      localStorage.setItem(storage, JSON.stringify(this.todoLists))
    }
  }
}
</script>

<style scoped>
.backHome {
  left: 1rem;
  position: absolute;
  ;
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

.todoListContent .todoList {
  border: 1px solid #cecece;
  border-radius: 20px;
  margin: 1rem;
  padding: 1rem;
}

.addButton {
  align-items: center;
  display: flex;
  margin-left: 1rem;
  padding-left: 40px;
}

.addButton button {
  width: 80px;
  height: 20px;
}

.todoListHeaderContainer {
  margin: 0 1rem;
  text-align: left;
}

.todoListHeaderContent {
  display: flex;
  justify-content: space-between;
}

.todoListHeaderContent button {
  height: 20px;
  width: 75px;
}

.todoListAction li {
  background-color: blue;
  color: white;
  font-weight: 600;
  margin: .1rem;
  padding: 0;
}
</style>
