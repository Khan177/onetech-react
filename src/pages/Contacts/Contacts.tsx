import React, { useContext } from "react";
import "./Contacts.css";
import { Context } from "../../App";

export default function Contacts() {
  const { isRus, isDark } = useContext(Context);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "85vh",
      }}
      className={isDark ? "dark-background" : "light-background"}
    >
      <span className={isDark ? "dark-color" : "light-color"}>87074905270</span>
    </div>
  );
}
