import { useEffect, useState } from "react";
import { METHODS, postTodo, updateTodo } from "../../api/TodosAPI";
import { TodoType } from "../../types/todoType";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { isValidText } from "../../validations/validationTodo";

type TodoUpdatingFormProps = {
  type: string;
  setLoading: Function;
  loading: boolean;
  todo: TodoType;
};

/**
 * This todo form have 2 different use cases:
 * 1. Create a new Todo: type = "Post", todo with values. In this case the form will generate a new Todo a new Todo.
 * 2. Update an existing Todo: type = "Petch", without todo. In this case the form will update the existing Todo.
 *
 * @param type The type parameter here is to make the usecases more readable.
 * @param setLoading The setter parameter here is to render the father component and fetch the todo list.
 */
export const TodoForm: React.FC<TodoUpdatingFormProps> = ({
  type,
  setLoading,
  loading,
  todo,
}) => {
  const [title, setTitle] = useState<string>(todo.title);
  const [description, setDescription] = useState<string>(todo.description);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setTitle(todo.title);
    setDescription(todo.description);
  }, [todo]);
  

  const onSubmit = async () => {
    setLoading(!loading);
    if (!isValidText(title) || !isValidText(description)) {
      setError(true); 
      return;
    }
    let succesed: number;
    if (type === METHODS.POST) succesed = await postTodo(title, description);
    else
      succesed = await updateTodo(
        todo ? todo.id.toString() : "-1",
        title,
        description
      );
    if (succesed !== 200) {
      // todo: text of try again with server message
    }
    setError(false);
    onClear();
  };

  const onClear = () => {
    setTitle("");
    setDescription("");
  };
  return (
    <div>
      <Stack direction="row" spacing={5} justifyContent={"center"}>
        <TextField
          style={{ marginLeft: "10px" }}
          id="input-title"
          label="Title"
          type="text"
          variant="standard"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          error={error}
          helperText={error? "Must be not empty" : ''}
        />
        <TextField
          id="input-description"
          label="Description"
          type="text"
          variant="standard"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          error={error}
          helperText={error? "Must be not empty" : ''}
        />
        <Button onClick={onSubmit} color="secondary" variant="text">
          {" "}
          {type === METHODS.POST ? "Add" : "Update"}
        </Button>
        <Button onClick={onClear} variant="text">
          Reset
        </Button>
      </Stack>
    </div>
  );
};
