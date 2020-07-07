import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/auth/login" />
        </Route>
        <Route path="/auth/login" component={LoginPage} />
        <Route path="/auth/register" component={RegisterPage} />
      </Switch>
    </div>
  );
}

export default App;
