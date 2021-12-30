import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Book } from "../book/book";
import { List } from "../list/list";

export function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books/">Create new book</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/books/:id" render={(routeProps: any) => <Book routeProps={routeProps} />} />
          <Route path="/books" render={(routeProps: any) => <Book routeProps={routeProps} />} />
          <Route path="/" render={() => <List />} />
        </Switch>
      </div>
    </Router>
  );
}