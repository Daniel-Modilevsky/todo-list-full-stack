import express from "express";
import { getTodosController, getTodoController, addTodoController, updateTodoController, deleteTodoController} from "../controllers/controller_todo";

export const todosRoutes = express.Router();
todosRoutes.get("/api/todos", getTodosController);
todosRoutes.get("/api/todos/:id", getTodoController);
todosRoutes.post("/api/todos", addTodoController);
todosRoutes.patch("/api/todos/:id", updateTodoController);
todosRoutes.delete("/api/todos/:id", deleteTodoController);
