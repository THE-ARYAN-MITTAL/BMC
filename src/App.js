import React, { useState } from "react";
import "./App.css";

function A() {
  const [bg, setBg] = useState("#ffffff");
  const a = {
    x: "#FFEB3B",
    y: "#2196F3",
    z: "#F44336",
    u: "#4CAF50",
    t: "#FF9800",
    p: "#9C27B0"
  };

  function b(c) {
    setBg(a[c]);
  }

  function r() {
    const w = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBg(w);
  }

  return (
    <div className="box" style={{ backgroundColor: bg }}>
      <h1>Color Changer App</h1>
      <div className="btns">
        <button onClick={() => b("x")}>Happy</button>
        <button onClick={() => b("y")}>Sad</button>
        <button onClick={() => b("z")}>Angry</button>
        <button onClick={() => b("u")}>Calm</button>
        <button onClick={() => b("t")}>Excited</button>
        <button onClick={() => b("p")}>Relaxed</button>
      </div>
      <button onClick={r}>Random</button>
      <p>Color: {bg}</p>
    </div>
  );
}

export default A;
