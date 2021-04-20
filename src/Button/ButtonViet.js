import React from "react";
import { useState } from "react";

export default function ButtonViet() {
  const [state, setState] = useState("What is the capital of Vietnam?");

  const handleClick = () => {
    setState("The capital is Hanoi!");
  };

  return (
    <div>
      <button onClick={handleClick}>{state}</button>;
    </div>
  );
}
