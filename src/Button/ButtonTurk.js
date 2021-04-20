import React from "react";
import { useState } from "react";

export default function ButtonTurk() {
  const [state, setState] = useState("What is the capital of Turkey?");

  const handleClick = () => {
    setState("The capital is Ankara!");
  };

  return (
    <div>
      <button onClick={handleClick}>{state}</button>
    </div>
  );
}
