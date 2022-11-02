import React from "react";
import { FaExchangeAlt } from "react-icons/fa";
import "../App.css";

export default function BtnChangeColor(props) {
  const btnThemeClick = () => {
    if (props.bkColorProps === "white") {
      console.log(props);
      props.darkThemeProps();
    } else {
      props.lightThemeProps();
    }
  };

  return (
    <button className="btnChangeTheme" onClick={btnThemeClick}>
      <FaExchangeAlt />
    </button>
  );
}
