import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import LogIt from "./Components/LogIt";
import Main from "./Components/Main";
import PackItPage from "./Components/PackItPage";

function App() {
  return (
    <Router>
      <div>
        <header>
          <Link to="/">
            <h1 id="logo">Pack Planit</h1>
          </Link>
          <nav className="nav-menu-active">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/planit" className="nav-link">
                  Plan Trip
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/packit" className="nav-link">
                  Pack
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Switch>
            <Route path="/planit">
              <LogIt />
            </Route>
            <Route path="/packit">
              <PackItPage />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </main>

        <footer>
          <p>Copyright 2021 Pack Planit. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
