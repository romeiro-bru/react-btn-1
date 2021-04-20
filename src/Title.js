import React from "react";
import atom from "./atom.svg";

export default function Title() {
  return (
    <>
      <h1>
        30 days of React
        <img src={atom} alt="react" />
      </h1>
      <h2>Day 1</h2>
    </>
  );
}
