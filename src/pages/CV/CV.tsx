import React, { useContext } from "react";

import "./CV.css";
import { Context } from "../../App";

export default function CV() {
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
      <span className={isDark ? "dark-color" : "light-color"}>
        {!isRus && <span>Hi, I'm Adilkhan</span>}
        {isRus && <span>Привет, я Адильхан</span>}
      </span>
    </div>
  );
}
