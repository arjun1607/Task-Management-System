import React, { useEffect, useState } from "react";
import {
  completeTodo,
  deleteTodo,
  getAllTodos,
  inCompleteTodo,
} from "../services/TodoService";
import { useNavigate } from "react-router-dom";
import { isAdminUser } from "../services/AuthService";

const ListTodoComponent = () => {
  const [todos, setTodos] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    listTodos();
  }, []);

  function listTodos() {
    getAllTodos()
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => console.log(error));
  }
  function addNewTodo() {
    navigator("/add-todo");
  }

  function updateTodo(id) {
    console.log(id);
    navigator(`/update-todo/${id}`);
  }

  function markCompleteTodo(id) {
    completeTodo(id)
      .then((response) => {
        listTodos();
      })
      .catch((error) => console.log(error));
  }

  function markInCompleteTodo(id) {
    inCompleteTodo(id)
      .then((response) => {
        listTodos();
      })
      .catch((error) => console.log(error));
  }

  function removeTodo(id) {
    deleteTodo(id)
      .then((response) => {
        listTodos();
      })
      .catch((error) => console.log(error));
  }

  const isAdmin = isAdminUser();

  return (
    <div className="container">
      <h2 className="text-center">List of Todos</h2>
      {isAdmin && (
        <button className="btn btn-primary mb-2" onClick={addNewTodo}>
          Add Todo
        </button>
      )}
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Todo Title</th>
            <th>Todo Description</th>
            <th>Todo Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>{todo.completed ? "YES" : "NO"}</td>
              <td>
                {isAdmin && (
                  <button
                    className="btn btn-info"
                    onClick={() => updateTodo(todo.id)}
                  >
                    Update
                  </button>
                )}
                {isAdmin && (
                  <button
                    className="btn btn-danger"
                    onClick={() => removeTodo(todo.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </button>
                )}

                <button
                  className="btn btn-success"
                  onClick={() => markCompleteTodo(todo.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Complete
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => markInCompleteTodo(todo.id)}
                  style={{ marginLeft: "10px" }}
                >
                  InComplete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodoComponent;
