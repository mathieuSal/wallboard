<template>
  <div class="bookmarkCategoryFilterContainer">
    <div class="bookmarkCategoryFilterContent">
      <header>
        <span>
          Categories
        </span>
        <span @click="openCategoryForm" class="actionIcon">
          <vue-material-icon
            name="add" :size="16" :color="'#4d4d4d'"
          ></vue-material-icon>
        </span>
      </header>
      <div>
        <ul>
          <li v-for="category in categories" :key="category.id">{{ category.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import VueMaterialIcon from 'vue-micon'

export default {
  name: 'CategoryFilter',
  components: {
    VueMaterialIcon
  },
  props: ['categories'],
  methods: {
    openCategoryForm () {
      this.$emit('openCategoryForm')
    }
  }
}
</script>
