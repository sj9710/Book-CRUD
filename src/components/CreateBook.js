import React from "react";
import { BookForm } from "./BookForm";
import { createBook } from "../api";
import { useHistory } from "react-router-dom";

export const CreateBook = () => {
  const history = useHistory();

  const onSubmit = async (data) => {
    await createBook(data);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Enter the details of Book</h3>
        <BookForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
