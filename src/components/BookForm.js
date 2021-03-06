import React from "react";
import { useForm } from "react-hook-form";

export const BookForm = ({ book, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      text: book ? book.text : "",
      author: book ? book.author : "",
      genre: book ? book.genre : "",
    },
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="text">Title</label>
        <input
          className="form-control"
          ref={register}
          type="text"
          name="text"
          id="text"
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Author</label>
        <input
          className="form-control"
          ref={register}
          type="text"
          name="author"
          id="author"
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Genre</label>
        <input
          className="form-control"
          ref={register}
          type="text"
          name="genre"
          id="genre"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Save Book
        </button>
      </div>
    </form>
  );
};
