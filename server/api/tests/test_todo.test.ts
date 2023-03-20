import {
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../utils/utils_todo";
import { ConflictException, NotFoundedException, UnSupportedTypeException } from "../validations/erros";

describe("Testing todos ctrollers", () => {
  test("Testing get todos", () => {
    const todos = getTodos();
    expect(todos.length).toBe(4);
  });

  test("Testing get todo", () => {
    const todo = getTodo("1");
    expect(todo).toStrictEqual({
      completed: false,
      description: "Build a simple app to manage your todos",
      id: 1,
      title: "Create Todo List App",
    });
    expect(() => getTodo("f")).toThrow(
      new UnSupportedTypeException(
        "id not founded"
      )
    );
    expect(() => getTodo("7")).toThrow(
      new NotFoundedException(
        "todo not founded"
      )
    );
  });

  test("Testing add new todo", () => {
    const todo = addTodo("new title", "new description");
    expect(todo).toStrictEqual({
      completed: false,
      description: "new description",
      id: 5,
      title: "new title",
    });
  });
  expect(() => addTodo("", "description")).toThrow(
    new ConflictException(
      "title or description are invalid"
    )
  );
  expect(() => addTodo("title", "")).toThrow(
    new ConflictException(
      "title or description are invalid"
    )
  );

  test("Testing update exsit todo", () => {
    const todo = updateTodo("1", "updated title", "updated description");
    expect(todo).toStrictEqual({
      completed: false,
      description: "updated description",
      id: 1,
      title: "updated title",
    });
  });

  expect(() => updateTodo("2", "title", "")).toThrow(
    new ConflictException(
      "title or description are invalid"
    )
  );
  expect(() => updateTodo("2", "", "description")).toThrow(
    new ConflictException(
      "title or description are invalid"
    )
  );

  test("Testing delete exis todo", () => {
    const todo = deleteTodo("1");
    expect(todo).toStrictEqual({
      completed: false,
      description: "updated description",
      id: 1,
      title: "updated title",
    });
  });
});
