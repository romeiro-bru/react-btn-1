import React from "react";
import { useState } from "react";

export default function Button() {
  const [state, setState] = useState("What is the longest river in the world?");

  const handleClick = () => {
    setState("It's the Nile River!");
  };

  return (
    <div>
      <button onClick={handleClick}>{state}</button>;
    </div>
  );
}
