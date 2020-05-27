<template>
  <div>
    <div class="back-home">
      <router-link to="/">
        <p>home</p>
      </router-link>
    </div>
    <div id="todo-widget">
      <p>here we will have our todo list component</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  data () {
    return {}
  }
}
</script>

<style scoped>
.back-home {
  position: absolute;
  top: 1rem;
  left: 1rem;
}
</style>
