import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBooks, deleteBook } from "../api";

export const BookList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const books = await getBooks();
      setItems(books);
    };
    fetchItems();
  }, []);

  const ass = (datass) => {
    deleteBook(datass);
    const fetchItems = async () => {
      const books = await getBooks();
      setItems(books);
    };
    fetchItems();
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
            {items.map((book) => (
              <tr key={book._id}>
                <td>{book.text}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td style={{ display: "flex" }}>
                  <button type="button" class="btn btn-warning">
                    <Link to={`/edit/${book._id}`}>Edit</Link>
                  </button>
                  &nbsp;&nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => ass(book._id)}
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
