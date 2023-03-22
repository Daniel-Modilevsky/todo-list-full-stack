import { deleteTodo } from "../../api/TodosAPI";
import { TodoType } from "../../types/todoType";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

type TodoItemProps = {
  todo: TodoType;
  setCurrentTodo: Function;
  loading: boolean;
  setLoading: Function;
};

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  setCurrentTodo,
  loading,
  setLoading,
}) => {
  const handelDelete = async () => {
    let succesed: number = await deleteTodo(todo.id.toString());
    if (succesed !== 200) {
      // text of try again with server message
    }
    setLoading(!loading);
  };
  return (
    <ListItem alignItems="flex-start">
      {/* TODO: Add here functinally from UI library */}
      <Checkbox
        edge="start"
        checked={todo.completed}
        tabIndex={-1}
        disableRipple
        inputProps={{ "aria-labelledby": todo.id.toString() }}
        onClick={() => {}}
      />
      <ListItemText primary={todo.title} secondary={<>{todo.description}</>} />
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          onClick={() => {
            setCurrentTodo(todo);
          }}
        >
          Edit
        </Button>
        <Button variant="outlined" onClick={handelDelete}>
          Delete
        </Button>
      </Stack>
    </ListItem>
  );
};
