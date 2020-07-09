import React from "react";
import PropTypes from "prop-types";

const Todo = (props: any) => (
  <li
    onClick={props.onClick}
    style={{
      textDecoration: props.completed ? "line-through" : "none",
    }}
  >
    {props.text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
