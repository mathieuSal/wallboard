import {fetchBookmarkCategories, postNewBookmarkCategory} from '../api/bookmarkApi'

const state = {
  categories: [],
  category_form: null
}

const getters = {
  categories: state => state.categories,
  category_form: state => state.category_form
}

const mutations = {
  CATEGORY_FETCH_LIST (state, categories) {
    state.categories = categories
  },
  TOGGLE_CATEGORY_FORM (state, category) {
    state.category_form = category
  }
}

const actions = {
  fetchCategories: (store) =>
    fetchBookmarkCategories().then(categories => store.commit('CATEGORY_FETCH_LIST', categories)),
  openCategoryForm: (store) => {
    const category = {
      name: '',
      color: '#ffc600',
      icon: ''
    }
    store.commit('TOGGLE_CATEGORY_FORM', category)
  },
  closeCategoryForm: (store) => {
    store.commit('TOGGLE_CATEGORY_FORM', null)
  },
  editCategoryForm: (store, payload) => {
    const category = {
      ...state.category_form,
      [payload.attribute]: payload.value
    }
    store.commit('TOGGLE_CATEGORY_FORM', category)
  },
  submitNewCategory: (store) => {
    postNewBookmarkCategory(state.category_form).then(() => {
      actions.fetchCategories(store)
      actions.closeCategoryForm(store)
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
