import React, { useContext } from "react";
import "./Projects.css";
import { Context } from "../../App";

export default function Projects() {
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
      <a
        className={isDark ? "dark-color" : "light-color"}
        href="https://sanapiste.kz"
      >
        Sanapiste
      </a>
    </div>
  );
}
