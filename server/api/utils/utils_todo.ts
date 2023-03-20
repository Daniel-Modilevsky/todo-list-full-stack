import { TodoType } from "../types/type_todo";
// Passed by reference so updated directly.
import { MOCK_TODOS } from "../tests/mock_data";
import {
  isTodoExist,
  isValidId,
  isValidProps,
} from "../validations/validation_todo";
import { ConflictException, NotFoundedException } from "../validations/erros";

export const getTodos = (): TodoType[] => {
    return MOCK_TODOS
};

export const getTodo = (id: string): TodoType => {
  if (!isValidId(id)) throw new NotFoundedException("id not founded");
  const numericId = parseInt(id);
  if (!isTodoExist(MOCK_TODOS, numericId)) throw new NotFoundedException("todo not founded");
  return MOCK_TODOS.find((todo) => todo.id === numericId)
};

export const addTodo = (title: string, description: string): TodoType => {
  if (!isValidProps(title, description)) throw new ConflictException("title or description are invalid");

  const newTodo: TodoType = {
    id: MOCK_TODOS.length + 1,
    title,
    description,
    completed: false,
  };
  MOCK_TODOS.push(newTodo);
  return newTodo
};

export const updateTodo = (id: string, title: string, description: string): TodoType => {
  if (!isValidId(id)) throw new NotFoundedException("id not founded");
  if (!isValidProps(title, description)) throw new ConflictException("title or description are invalid");
  const numericId = parseInt(id);
  if (!isTodoExist(MOCK_TODOS, numericId)) throw new NotFoundedException("todo not founded");

  const todoToUpdate = MOCK_TODOS.find((todo) => todo.id === numericId);
  todoToUpdate.title = title;
  todoToUpdate.description = description;
  return todoToUpdate;
};

export const deleteTodo = (id: string): TodoType => {
  if (!isValidId(id)) throw new NotFoundedException("id not founded");

  const numericId = parseInt(id);
  if (!isTodoExist(MOCK_TODOS, numericId)) throw new NotFoundedException("todo not founded");

  const indexToRemove = MOCK_TODOS.findIndex((todo) => todo.id === numericId);
  const removedTodo = MOCK_TODOS.splice(indexToRemove, 1);
  return removedTodo[0];
};
