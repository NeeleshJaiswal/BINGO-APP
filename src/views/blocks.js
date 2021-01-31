import React, { useEffect, useState, useContext } from "react";
import { WinnerContext } from "../context/winner.context";
import Tile from "./tile";
import Confetti from "./confetti";
import data, { lines } from "../utilities/data";
import { isWon } from "../services/winning-service";

function Blocks() {
  
  const [state, setState] = useState({ checked: {} });
  const { setWinner } = useContext(WinnerContext);
  
  const toggle = (id) => {
    setState((state) => {
      const checked = { ...state.checked, [id]: !state.checked[id] };
      const won = isWon(checked);
      return {
        ...state,
        checked,
        won,
      };
    });
  };
  useEffect(() => {
    let newArr = [];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c, d, e] = lines[i];
      if (
        state.checked[a] &&
        state.checked[b] &&
        state.checked[c] &&
        state.checked[d] &&
        state.checked[e]
      ) {
        newArr.push(a, b, c, d, e);
      }
    }
    setWinner(newArr);
  }, [state.checked]);

  return (
    <>
      <div className="wrapper">
        {Object.keys(data).map((id) => (
          <Tile
            key={id}
            id={id}
            isSet={!!state.checked[id]}
            onToggle={() => toggle(id)}
          >
            {data[id]}
          </Tile>
        ))}
      </div>
      {state.won ? <Confetti /> : null}
    </>
  );
}

export default Blocks;
