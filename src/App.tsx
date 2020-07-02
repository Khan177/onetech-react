import React, { createContext, useState } from "react";

import Header from "./components/Header/Header";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CV from "./pages/CV/CV";
import Projects from "./pages/Projects/Projects";
import Contacts from "./pages/Contacts/Contacts";

export const Context = createContext({ isRus: false, isDark: false });

function App() {
  const [isRus, setIsRus] = useState(false);
  const [isDark, setIsDark] = useState(false);
  return (
    <BrowserRouter>
      <Context.Provider value={{ isRus: isRus, isDark: isDark }}>
        <div className="App">
          <Header
            toggleLang={(): void => setIsRus((prev) => !prev)}
            toggleDark={(): void => setIsDark((prev) => !prev)}
          />
          <Switch>
            <Route exact path="/" component={CV} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contacts" component={Contacts} />
          </Switch>
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
