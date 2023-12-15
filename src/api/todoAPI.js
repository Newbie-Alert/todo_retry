import axios from "axios";

export const todoAPI = axios.create({
  baseURL: 'http://localhost:8080'
})

export const getTodos = async () => {
  const res = await todoAPI.get('/todos');
  return res.data;
}

export const addTodo = async (newTodo) => {
  await todoAPI.post('/todos', newTodo)
  return null
}

export const switchTodo = async (edited) => {
  await todoAPI.patch(`/todos/${edited.id}`, edited)
}

export const deleteTodo = async (id) => {
  await todoAPI.delete(`/todos/${id}`)
}