export const getBooks = () => fetch("http://localhost:4000/").then(res => res.json())

export const createBook = (book) => fetch("http://localhost:4000/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(book)
})  

export const updateBook = (book, id) => fetch(`http://localhost:4000/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(book)
})  

export const deleteBook = (id) => fetch(`http://localhost:4000/delete/${id}`).then(res=>res.json())


export const getBook = (id) => fetch(`http://localhost:4000/${id}`).then(res => res.json())