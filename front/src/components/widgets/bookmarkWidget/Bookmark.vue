<template>
  <div class="bookmarkBody">
    <home-component/>
    <bookmark-filters
      :categories="categories"
      @submitNewCategory="submitNewCategory"
      @submitEditCategory="submitEditCategory"
      @removeCategory="removeCategory"
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
      'categories'
    ])
  },
  methods: {
    ...Vuex.mapActions([
      'fetchCategories',
      'submitNewCategory',
      'submitEditCategory',
      'removeCategory'
    ])
  }
}
</script>

<style src='./style/bookmark.css'></style>
