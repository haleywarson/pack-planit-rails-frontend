import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import "./App.css";

import LogIt from "./Components/LogIt"
import Main from "./Components/Main"
import PackItPage from "./Components/PackItPage"
// import Login from "./Components/Login"

function App() {

    // const [user, setUser] = useState({})

    // const login = (username) => {
    //   return fetch("http://localhost:9393/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       username
    //     })
    //   })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     if (response.error) {
    //       alert(response.error);
    //     } else {
    //       setUser(response)
    //     }
    //     return response;
    //   });
    // };

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
                <Link to="/logit" className="nav-link">
                  Log Trip
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
            <Route path="/logit">
              <LogIt />
            </Route>
            <Route path="/packit">
              <PackItPage />
            </Route>
            {/* <Route
              path="/login" exact
              render={(props) => 
              <Login {...props} login={login} />}
            /> */}
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
