<template>
  <ul class="todoListAction list">
    <li v-for="action in actions" :key="action.id"> {{ action.name }}</li>
  </ul>
</template>

<script>
export default {
  props: ['actions'],
  data () {
    return {}
  }
}
</script>
