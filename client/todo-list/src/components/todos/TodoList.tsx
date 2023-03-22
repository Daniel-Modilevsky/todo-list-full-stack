import "../../App.css";
import { TodoType } from "../../types/todoType";
import { TodoItem } from "./TodoItem";
import List from '@mui/material/List';

type TodoListProps = {
  todos: TodoType[],
  setCurrentTodo: Function,
  loading: boolean,
  setLoading: Function
};

export const TodosList: React.FC<TodoListProps> = ({ todos, setCurrentTodo, loading, setLoading }) => {
  
  if (todos.length === 0)
  return (
    <div>
      <span>No items in the list</span>
    </div>
  );

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
    {todos.map((todo) => {
        return (
          <TodoItem key={todo.id} todo={todo} setCurrentTodo={setCurrentTodo} loading={loading} setLoading={setLoading}/>
        );
      })}
    </List>
  );
};
