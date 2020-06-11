<template>
  <div class="bookmarkFiltersContainer">
    <div class="bookmarkFiltersContent">
      <category-filter
        :categories="categories"
        @openCategoryForm="openCategoryForm"
      />
    </div>
    <div class="addCategoryForm" v-if="categoryForm">
      <category-form
        :form="categoryForm"
        @editCategoryForm="editCategoryForm"
        @submitNewCategory="submitNewCategory"
      />
    </div>
  </div>
</template>

<script>
import CategoryFilter from './categoryFilter'
import CategoryForm from './categoryForm'

export default {
  name: 'BookmarkFilters',
  components: {
    CategoryFilter,
    CategoryForm
  },
  props: [
    'categories',
    'categoryForm'
  ],
  methods: {
    openCategoryForm () {
      this.$emit('openCategoryForm')
    },
    editCategoryForm (payload) {
      this.$emit('editCategoryForm', payload)
    },
    submitNewCategory () {
      this.$emit('submitNewCategory')
    }
  }
}
</script>

<style src='../style/filters.css'></style>
