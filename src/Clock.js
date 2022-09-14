import React, { useState } from "react";
import "./index.css";

// Import module and default styles

function Label(props) {
  return <div style={{ marginTop: 25, marginBottom: 5 }}>{props.children}</div>;
}

let changeInterval = undefined;
const Clock = () => {
  const [state, setState] = useState(0);
  const [Dis, setDis] = useState(false);

  function Start() {
    changeInterval = setInterval(() => {
      setState((x) => x + 1);
    }, 1000);
    setDis(true);
  }
  function Stop() {
    clearTimeout(changeInterval);
    setDis(false);
  }
  function Reset() {
    setState(0);
    clearTimeout(changeInterval);
    setDis(false);
  }
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={Start} disabled={Dis}>
        Start
      </button>
      &nbsp;&nbsp;
      <button onClick={Stop}>Stop</button>&nbsp;&nbsp;
      <button onClick={Reset}>Reset</button>&nbsp;&nbsp;
    </div>
  );
};

export default Clock;
