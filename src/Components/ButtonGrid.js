import React from "react";
import Button from "./Button";
import "./ButtonGrid.css";

function ButtonGrid({ handleClick, isDisabled }) {
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <div className="grid-cont">
      {alphabets.map((letter) => {
        return (
          <Button
            handleClick={handleClick}
            key={letter}
            value={letter}
          ></Button>
        );
      })}
    </div>
  );
}

export default ButtonGrid;
