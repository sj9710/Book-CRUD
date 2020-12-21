import React, { useState, useEffect } from "react";
import { BookForm } from "./BookForm";
import { useRouteMatch, useHistory } from "react-router-dom";
import { getBook, updateBook } from "../api";

export const EditBook = () => {
  const match = useRouteMatch();
  const [book, setBook] = useState();
  const history = useHistory();

  useEffect(() => {
    const fetchBook = async () => {
      const book = await getBook(match.params.id);
      setBook(book);
    };
    fetchBook();
  }, []);

  const onSubmit = async (data) => {
    await updateBook(data, match.params.id);
    history.push("/");
  };

  return book ? (
    <div className="container">
      <div className="mt-3">
        <h3>Edit book Item</h3>
        <BookForm book={book} onSubmit={onSubmit} />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};
