import React from "react";
import { useState } from "react";
import "./style.css";

export default function Button() {
  const [vietnam, setVietnam] = useState("What is the capital of Vietnam?");
  const [australia, setAustralia] = useState(
    "What is the capital of Australia?"
  );
  const [turkey, setTurkey] = useState("What is the capital of Turkey?");

  const handleVietnam = () => {
    setVietnam("The capital is Hanoi!");
  };
  const handleAustralia = () => {
    setAustralia("The capital is Canberra!");
  };
  const handleTurkey = () => {
    setTurkey("The capital is Ankara!");
  };

  return (
    <div>
      <button onClick={handleVietnam}>{vietnam}</button>
      <button onClick={handleAustralia}>{australia}</button>;
      <button onClick={handleTurkey}>{turkey}</button>
    </div>
  );
}
