import axios from "axios";

export const todoAPI = axios.create({
  baseURL: 'http://localhost:8080'
})

export const getTodos = async () => {
  const res = await todoAPI.get('/todos');
  return res.data;
}