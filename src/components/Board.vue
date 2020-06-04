<template>
    <div id="board">
      <p>Widget list</p>
      <div class="widget-list-container">
        <div class="widget-list-content">
          <ul>
            <li>
              <router-link to="/todo-list">
                Todo list widget
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Board',
  data () {
    return {}
  }
}
</script>

<style scoped>
.widget-list-container {
  display: flex;
  width: 100%;
  justify-content: center;
}

.widget-list-content {
  display: flex;
  width: 60%;
}

ul {
  list-style: none;
}
</style>
