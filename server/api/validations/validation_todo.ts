import { TodoType } from "../types/type_todo";

export const isTodoExist = (todos: TodoType[], id: number): boolean => {
  return !!todos.find((todo) => todo.id === id);
};

export const isValidProps = (title: string, description: string): boolean => {
  return title.length > 0 && description.length > 0;
};

export const isValidId = (id: string): boolean => {
  return id.length > 0 && !isNaN(parseInt(id));
};
