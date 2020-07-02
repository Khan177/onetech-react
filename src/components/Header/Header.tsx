import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Switch } from "@material-ui/core";
import { Context } from "../../App";

import "./Header.css";

export default function Header(props: any) {
  const { isRus, isDark } = useContext(Context);
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contacts">Contacts</Link>
      <Switch
        checked={isRus}
        onChange={props.toggleLang}
        color="primary"
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Switch
        checked={isDark}
        onChange={props.toggleDark}
        color="primary"
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
}
