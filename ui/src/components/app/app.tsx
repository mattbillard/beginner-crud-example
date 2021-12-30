import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Book } from "../book/book";
import { List } from "../list/list";



const Home = () => {
  return <h2>Home</h2>;
}

const About = () => {
  return <h2>About</h2>;
}

const Users = () => {
  return <h2>Users</h2>;
}

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/books/:id" render={(routeProps: any) => <Book routeProps={routeProps} />} />
          <Route path="/">
            <List />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}