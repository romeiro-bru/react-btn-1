import React from "react";
import { useState } from "react";
import "./style.css";

export default function ButtonAus() {
  const [state, setState] = useState("What is the capital of Australia?");

  const handleClick = () => {
    setState("The capital is Canberra!");
  };

  return (
    <div>
      <button onClick={handleClick}>{state}</button>;
    </div>
  );
}
