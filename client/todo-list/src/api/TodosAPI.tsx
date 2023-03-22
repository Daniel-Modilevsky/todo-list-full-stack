import axios from "axios";
const BASE_TODOS_URL = "http://localhost:8000/api/todos";

export const METHODS = {
    POST: "POST",
    PATCH: "PATCH"
}

export const getTodos = async (setTodos: Function) => {
  const { data } = await axios.get(`${BASE_TODOS_URL}`);
  setTodos(data);
};

export const postTodo = async (title: string, description: string) => {
  const res = await axios.post(`${BASE_TODOS_URL}`, {
    title,
    description,
  });
  return res.status;
};

export const updateTodo = async (
  id: string,
  title: string,
  description: string
) => {
  const res = await axios.patch(`${BASE_TODOS_URL}/${id}`, {
    title,
    description,
  });
  return res.status;
};

export const deleteTodo = async (id: string) => {
  const res = await axios.delete(`${BASE_TODOS_URL}/${id}`);
  return res.status;
};
