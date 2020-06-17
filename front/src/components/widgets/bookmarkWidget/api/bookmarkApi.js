import axios from 'axios'
import ENV from '../../../../../.env'

const fetchBookmarkCategories = () => {
  return axios.get(`${ENV.backUrl}/bookmark_categories`).then(categories => categories.data['hydra:member'])
}

const postNewBookmarkCategory = (category) => {
  return axios.post(`${ENV.backUrl}/bookmark_categories`, category).then(category => category)
}

const putEditBookmarkCategory = (category) => {
  return axios.put(`${ENV.backUrl}/bookmark_categories/${category.id}`, category).then(category => category)
}

export {fetchBookmarkCategories, postNewBookmarkCategory, putEditBookmarkCategory}
