# Overview

This project consists of a single-page application built using React, which communicates with a Node.js backend server. The server uses MongoDB as a database to store todo list items. In addition to using MongoDB, the server also uses a mock file as a fallback option for data retrieval.

## Frontend

The frontend of the project is built using React and Typescript. It provides a simple user interface for managing todo list items. The interface consists of a form for creating new todo items, a list of existing items, and buttons for editing and deleting items. The React components are written in Typescript and use Axios for making HTTP requests to the server.

## Backend

The backend of the project is built using Node.js and Typescript. It provides a REST API for managing todo list items. The API consists of endpoints for creating, retrieving, updating, and deleting todo items. The server uses the MongoDB database to store and retrieve data. In addition to using MongoDB, the server also uses a mock file as a fallback option for data retrieval.

## Database

The database used for this project is MongoDB. It stores todo list items as documents in a single collection. Each document contains the following fields:

- id: The unique identifier for the item.
- title: The title of the item.
- description: A description of the item.
- completed: A boolean indicating whether the item has been completed.

## How to Run

To run the project, follow these steps:

- Clone the repository to your local machine.
- Navigate to the root directory of the project.
- Run npm install to install the dependencies.
- Start the server by running npm run server.
- In a separate terminal window, start the client by running npm start.
- Open your browser and navigate to http://localhost:3000.

## Backend Implementation

The backend of the project is built using Express.js, a popular Node.js web application framework. It provides a REST API with four endpoints for managing todo items: GET /api/todos, POST /api/todos, PUT /api/todos/:id, and DELETE /api/todos/:id.

- The GET /api/todos endpoint returns an array of todo items from the database or the mock file if there is no connection to the database.

- The POST /api/todos endpoint creates a new todo item in the database or in the mock file if there is no connection to the database.

- The PUT /api/todos/:id endpoint updates an existing todo item in the database or in the mock file if there is no connection to the database.

- The DELETE /api/todos/:id endpoint deletes an existing todo item from the database or from the mock file if there is no connection to the database.

The server uses Mongoose, a popular MongoDB object modeling tool, to interact with the database. Mongoose provides a schema for the todo item document and defines CRUD (Create, Read, Update, Delete) operations for the database.

## Frontend Implementation

The frontend of the project is built using React, a popular JavaScript library for building user interfaces. It uses Axios, a promise-based HTTP client, to make HTTP requests to the backend server.

The main component of the frontend is the TodoList component, which contains a form for creating new todo items, a list of existing items, and buttons for editing and deleting items. The TodoList component passes down its state and event handlers as props to its child components.

The child components of the TodoList component are the TodoItem component and the TodoForm component. The TodoItem component displays a single todo item and provides buttons for editing and deleting the item. The TodoForm component is a simple form that allows the user to create a new todo item.

## Conclusion

In conclusion, this is a simple implementation of a todo list project that uses Typescript, React, Node.js, MongoDB, and a mock file. The project demonstrates how to build a full stack application with a REST API and a user interface. With this project as a starting point, you can add more features and functionality as needed to meet your specific requirements.
