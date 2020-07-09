import React from "react";
import Footer from "./components/Footer";
import AddTodo from "./pages/AddTodo";
import VisibleTodoList from "./pages/VisibleTodoList";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
