import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTodos, deleteTodo } from "../api";

export const TodoList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const todos = await getTodos();
      setItems(todos);
      // console.log(todos);
    };
    fetchItems();
  }, []);

  const ass = (datass) => {
    deleteTodo(datass);
    const fetchItems = async () => {
      const todos = await getTodos();
      setItems(todos);
    };
    fetchItems();
    console.log(datass);
  };
  return (
    <div className="container">
      <div className="mt-3">
        <h3>Books</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((todo) => (
              <tr key={todo._id}>
                <td>{todo.text}</td>
                <td>{todo.author}</td>
                <td>{todo.genre}</td>
                <td style={{ display: "flex" }}>
                  <button type="button" class="btn btn-warning">
                    <Link to={`/edit/${todo._id}`}>Edit</Link>
                  </button>
                  &nbsp;&nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => ass(todo._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
