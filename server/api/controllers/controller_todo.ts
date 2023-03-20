import { Request, Response } from "express";
import { httpStatusCodes } from "../validations/erros";
import { addTodo, deleteTodo, getTodo, getTodos, updateTodo } from "../utils/utils_todo";

export const getTodosController = (req: Request, res: Response): void => {
  try {
    const todos = getTodos();
    res.status(httpStatusCodes.OK).json(todos);
  } catch (err) {
    res.status(err.statusCode).send(err.name);
  }
};

export const getTodoController = (req: Request, res: Response): void => {
  try {
    const { id } = req.params;
    const todo = getTodo(id);
    res.status(httpStatusCodes.OK).json(todo);
  } catch (err) {
    res.status(err.statusCode).send(err.name);
  }
};

export const addTodoController = (req: Request, res: Response): void => {
  try {
    const { title, description } = req.body;
    const todo = addTodo(title, description);
    res.status(httpStatusCodes.OK).json(todo);
  } catch (err) {
    res.status(err.statusCode).send(err.name);
  }
};

export const updateTodoController = (req: Request, res: Response): void => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const todo = updateTodo(id, title, description);
    res.status(httpStatusCodes.OK).json(todo);
  } catch (err) {
    res.status(err.statusCode).send(err.name);
  }
};

export const deleteTodoController = (req: Request, res: Response): void => {
  try {
    const { id } = req.params;
    const todo = deleteTodo(id);
    res.status(httpStatusCodes.OK).json(todo);
  } catch (err) {
    res.status(err.statusCode).send(err.name);
  }
};
