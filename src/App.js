import "./App.css";
import React, { useState, useMemo, useCallback } from "react";
import { useEffect } from "react";
import Clock from "./Clock";
import Search2 from "./Search";

function App() {
  const [state, setState] = useState({
    all: false,
    one: false,
    two: false,
    three: false,
    four: false,
  });
  var a = [{ value: "state.one" }];
  useEffect(() => {
    if (
      state.one == false ||
      state.two == false ||
      state.three == false ||
      state.four == false
    ) {
      setState({ ...state, all: false });
    }

    if (
      state.one == true &&
      state.two == true &&
      state.three == true &&
      state.four == true
    ) {
      setState({ ...state, all: true });
    }
  }, [state.one, state.two, state.three, state.four]);
  function selectAll() {
    let i = 1;
    for (let key in state) {
      if (state[key] == true) i++;
    }
    if (i < 5) {
      setState({
        all: true,
        one: true,
        two: true,
        three: true,
        four: true,
      });
    } else {
      setState({
        all: !state.all,
        one: !state.one,
        two: !state.two,
        three: !state.three,
        four: !state.four,
      });
    }
  }

  return (
    <div className="App">
      <h1> Check Box </h1>
      <input
        type={"checkbox"}
        id="c1"
        checked={state.all}
        onClick={selectAll}
      />
      &nbsp;&nbsp; <label for="c1">ALL</label>&nbsp;
      <input
        type={"checkbox"}
        id="c2"
        checked={state.one}
        onClick={() => setState({ ...state, one: !state.one })}
      />
      &nbsp;&nbsp;<label for="c2">one</label>&nbsp;
      <input
        type={"checkbox"}
        id="c3"
        checked={state.two}
        onClick={() => setState({ ...state, two: !state.two })}
      />
      &nbsp;&nbsp;<label for="c3">two</label>&nbsp;
      <input
        type={"checkbox"}
        id="c4"
        checked={state.three}
        onClick={() => setState({ ...state, three: !state.three })}
      />
      &nbsp;&nbsp;<label for="c4">three</label>&nbsp;
      <input
        type={"checkbox"}
        id="c5"
        checked={state.four}
        onClick={() => setState({ ...state, four: !state.four })}
      />
      &nbsp;&nbsp;
      <label for="c5">four</label>
      &nbsp;
      <Clock />
      <br />
      <br />
      <br />
      <Search2 />
    </div>
  );
}

export default App;
