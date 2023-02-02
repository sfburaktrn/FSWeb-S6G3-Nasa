import React from "react";
import "./header.css";
const Header = (props) => {
  document.querySelectorAll(".Fly>i").forEach((v, k) => {
    v.style.animationDelay = k / 9 + "s";
  });
  return (
    <header>
      <div class="Fly">
        <i>P</i>
        <i>H</i>
        <i>O</i>
        <i>T</i>
        <i>O</i>
        <i>&nbsp;</i>
        <i>D</i>
        <i>A</i>
        <i>Y</i>
        <i>🚀</i>
        <i>&nbsp;</i>
        <i>N</i>
        <i>A</i>
        <i>S</i>
        <i>A</i>
      </div>
    </header>
  );
};

export default Header;
