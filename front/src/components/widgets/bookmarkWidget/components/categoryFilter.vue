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
      <div class="bookmarkCategoryFilterContentBody">
        <category v-for="category in categories" :key="category.id" :category="category"/>
      </div>
    </div>
  </div>
</template>

<script>
import VueMaterialIcon from 'vue-micon'
import Category from './category'

export default {
  name: 'CategoryFilter',
  components: {
    VueMaterialIcon,
    Category
  },
  props: ['categories'],
  methods: {
    openCategoryForm () {
      this.$emit('openCategoryForm')
    }
  }
}
</script>
