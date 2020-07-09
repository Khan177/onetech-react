import React from "react";
import PropTypes from "prop-types";

const Link = (props: any) => (
  <button
    onClick={props.onClick}
    disabled={props.active}
    style={{
      marginLeft: "4px",
    }}
  >
    {props.children}
  </button>
);

export default Link;
