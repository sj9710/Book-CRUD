import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { BookList } from "./components/BookList";
import { CreateBook } from "./components/CreateBook";
import { EditBook } from "./components/EditBook";

function App() {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Books
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">
              Add Book
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={BookList} />
        <Route path="/edit/:id" component={EditBook} />
        <Route path="/create" component={CreateBook} />
      </Switch>
    </div>
  );
}

export default App;
