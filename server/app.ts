import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import { todosRoutes } from "./api/routes/route_todo";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb", type: "application/json" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(todosRoutes);

app.get("/", (req, res) => {
  res.send("Todo list Typescript project");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});