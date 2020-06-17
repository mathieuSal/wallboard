import {
  fetchBookmarkCategories,
  postNewBookmarkCategory,
  putEditBookmarkCategory,
  deleteBookmarkCategory
} from '../api/bookmarkApi'

const state = {
  categories: []
}

const getters = {
  categories: state => state.categories
}

const mutations = {
  CATEGORY_FETCH_LIST (state, categories) {
    state.categories = categories
  }
}

const actions = {
  fetchCategories: (store) =>
    fetchBookmarkCategories().then(categories => store.commit('CATEGORY_FETCH_LIST', categories)),
  submitNewCategory: (store, newCategory) => {
    postNewBookmarkCategory(newCategory).then(() => {
      actions.fetchCategories(store)
    })
  },
  submitEditCategory: (store, category) => {
    putEditBookmarkCategory(category).then(() => {
      actions.fetchCategories(store)
    })
  },
  removeCategory: (store, categoryId) => {
    deleteBookmarkCategory(categoryId).then(() => {
      actions.fetchCategories(store)
    })
  }
}

const BookmarkStore = {
  state,
  mutations,
  getters,
  actions,
  strict: true
}

export default BookmarkStore
