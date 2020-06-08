<template>
    <div id="board">
      <HomeComponent/>
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
import HomeComponent from './generic/homeComponent/HomeComponent'

export default {
  name: 'Board',
  data () {
    return {}
  },
  components: {
    HomeComponent
  }
}
</script>

<style scoped>
.widget-list-container {
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 10rem 0;
}

.widget-list-content {
  display: flex;
  width: 60%;
}

ul {
  list-style: none;
}
</style>
