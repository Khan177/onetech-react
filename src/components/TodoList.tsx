import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = (props: any) => (
  <ul>
    {props.todos.map((todo: any) => (
      <Todo key={todo.id} {...todo} onClick={() => props.toggleTodo(todo.id)} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
