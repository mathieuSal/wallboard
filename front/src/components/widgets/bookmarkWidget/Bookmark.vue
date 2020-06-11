<template>
  <div class="bookmarkBody">
    <home-component/>
    <bookmark-filters
      :categories="categories"
      :categoryForm="category_form"
      @openCategoryForm="openCategoryForm"
      @editCategoryForm="editCategoryForm"
      @submitNewCategory="submitNewCategory"
    />
  </div>
</template>

<script>
import HomeComponent from '../../generic/homeComponent/HomeComponent'
import BookmarkFilters from './components/bookmarkFilters'
import store from '../../../store/wallboardStore'
import Vuex from 'vuex'

export default {
  name: 'Bookmark',
  store,
  components: {
    HomeComponent,
    BookmarkFilters
  },
  mounted () {
    this.fetchCategories()
  },
  computed: {
    ...Vuex.mapGetters([
      'categories',
      'category_form'
    ])
  },
  methods: {
    ...Vuex.mapActions([
      'fetchCategories',
      'openCategoryForm',
      'closeCategoryForm',
      'editCategoryForm',
      'submitNewCategory'
    ])
  }
}
</script>

<style src='./style/bookmark.css'></style>
