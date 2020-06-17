<template>
  <div class="bookmarkFiltersContainer">
    <div class="bookmarkFiltersContent">
      <category-filter
        :categories="categories"
        @toggleCategoryManager="toggleCategoryManager"
      />
    </div>
    <category-manager
      v-if="isCategoryManagerOpen"
      :categories="categories"
      @submitNewCategory="submitNewCategory"
      @submitEditCategory="submitEditCategory"
      @removeCategory="removeCategory"
    />
  </div>
</template>

<script>
import CategoryFilter from './categoryFilter'
import CategoryManager from './categoryManager'

export default {
  name: 'BookmarkFilters',
  data () {
    return {
      isCategoryManagerOpen: false
    }
  },
  components: {
    CategoryFilter,
    CategoryManager
  },
  props: [
    'categories'
  ],
  methods: {
    toggleCategoryManager () {
      this.isCategoryManagerOpen = !this.isCategoryManagerOpen
    },
    submitNewCategory (newCategory) {
      this.$emit('submitNewCategory', newCategory)
    },
    submitEditCategory (category) {
      this.$emit('submitEditCategory', category)
    },
    removeCategory (categoryId) {
      this.$emit('removeCategory', categoryId)
    }
  }
}
</script>

<style src='../style/filters.css'></style>
