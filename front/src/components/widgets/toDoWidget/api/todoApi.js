import axios from 'axios'
import ENV from '../../../../../.env'

const fetchTodosData = () => {
  return axios.get(`${ENV.backUrl}/todos`).then(todos => todos.data['hydra:member'])
}

const postNewTodo = (todo) => {
  return axios.post(`${ENV.backUrl}/todos`, todo).then(todo => todo)
}

const updateTodo = (id, todo) => {
  return axios
    .put(`${ENV.backUrl}/todos/${id}`, todo)
    .then(todo => todo)
}

const deleteTodo = (id) => {
  return axios
    .delete(`${ENV.backUrl}/todos/${id}`)
    .then(() => true)
}

export {fetchTodosData, postNewTodo, updateTodo, deleteTodo}
