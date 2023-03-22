import React, { useEffect, useState } from "react";
import { TodosList } from "../components/todos/TodoList";
import { TodoType } from "../types/todoType";
import { getTodos, METHODS } from "../api/TodosAPI";
import { TodoForm } from "../components/todos/TodoForm";

type TodoPageProps = {};

const initialCurrentTodo: TodoType = { id: -1, title: '', description: '', completed: false }

export const TodosPage: React.FC<TodoPageProps> = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  
  const [loading, setLoading] = useState<boolean>(false);
  const [currentTodo, setCurrentTodo] = useState<TodoType>(initialCurrentTodo);
  const [filteredTodos, setFilteredTodos] = useState<TodoType[]>([]);

  // TODO: check the renders and if I can remove some of them.
  // TODO: loading, setLoading, setCurrentTodo can passed as context parameter
  useEffect(() => {
    getTodos(setTodos);
    setCurrentTodo(initialCurrentTodo)
  }, [loading]);

  useEffect(()=>{
    setFilteredTodos([...todos])
  },[todos])

  return (
    <div>
      <TodoForm type={currentTodo.id === -1 ? METHODS.POST : METHODS.PATCH  } setLoading={setLoading} loading={loading} todo={currentTodo}/>
      <TodosList todos={filteredTodos} setCurrentTodo={setCurrentTodo} loading={loading} setLoading={setLoading}/>
    </div>
  );
};
