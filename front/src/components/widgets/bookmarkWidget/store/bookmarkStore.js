import {
  fetchBookmarkCategories,
  postNewBookmarkCategory,
  putEditBookmarkCategory,
  deleteBookmarkCategory
} from '../api/bookmarkApi'

const state = {
  categories: [],
  activeCategoryFilter: []
}

const getters = {
  categories: state => state.categories.map(cat => { return {...cat, active: state.activeCategoryFilter.includes(cat.id)} })
}

const mutations = {
  CATEGORY_FETCH_LIST (state, categories) {
    state.categories = categories
  },
  INIT_ACTIVE_CATEGORY_FILTER (state, ids) {
    state.activeCategoryFilter = ids
  },
  SET_NEW_CATEGORY_AS_ACTIVE (state, id) {
    state.activeCategoryFilter.push(id)
  },
  DISABLE_CATEGORY (state, id) {
    state.activeCategoryFilter = state.activeCategoryFilter.filter(catId => catId !== id)
  },
  ENABLE_CATEGORY (state, id) {
    state.activeCategoryFilter = [...state.activeCategoryFilter, id]
  }
}

const actions = {
  fetchCategories: (store) =>
    fetchBookmarkCategories().then(categories => {
      store.commit('CATEGORY_FETCH_LIST', categories)
      store.commit('INIT_ACTIVE_CATEGORY_FILTER', categories.map(cat => cat.id))
    }),
  refreshCategories: (store) =>
    fetchBookmarkCategories().then(categories => store.commit('CATEGORY_FETCH_LIST', categories)),
  toggleCategory: (store, id) => {
    if (state.activeCategoryFilter.includes(id)) {
      store.commit('DISABLE_CATEGORY', id)
    } else {
      store.commit('ENABLE_CATEGORY', id)
    }
  },
  submitNewCategory: (store, newCategory) => {
    postNewBookmarkCategory(newCategory).then(category => {
      actions.refreshCategories(store)
      store.commit('SET_NEW_CATEGORY_AS_ACTIVE', category.id)
    })
  },
  submitEditCategory: (store, category) => {
    putEditBookmarkCategory(category).then(() => {
      actions.refreshCategories(store)
    })
  },
  removeCategory: (store, categoryId) => {
    deleteBookmarkCategory(categoryId).then(() => {
      actions.refreshCategories(store)
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
