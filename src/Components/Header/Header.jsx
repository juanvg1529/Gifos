import React, { useState } from "react";
import "./Header.css";

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const setTheme = (e) => setIsDarkMode(!isDarkMode);

  //${isDarkMode ? "dark" : "light"
  return (
    <div className="Header-component">
      <section className="Header-Title">
        <img src="https://i.imgur.com/eaDMM8T.png" alt="logo"></img>
        <span className="Gifos-logo-name"> GIFOS</span>
      </section>
      <button onClick={setTheme} className="Header-Button">
        MODO {isDarkMode ? "LIGHT" : "DARK"}
      </button>
    </div>
  );
}
export default Header;
