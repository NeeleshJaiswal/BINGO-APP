import React, { useEffect, useState, useContext } from "react";
import { WinnerContext } from "../context/winner.context";
import Tile from "./tile";
import Confetti from "./confetti";
import data, { lines } from "../utilities/data";

function Blocks() {
  
  const [state, setState] = useState({ checked: {} });
  const { setWinner } = useContext(WinnerContext);
  const isWon = (checked) => {
    const range = [0, 1, 2, 3, 4];
    return (
      undefined !==
        range.find((row) =>
          range.every((column) => checked[row * 5 + column])
        ) ||
      undefined !==
        range.find((column) =>
          range.every((row) => checked[row * 5 + column])
        ) ||
      range.every((index) => checked[index * 5 + index]) ||
      range.every((index) => checked[index * 5 + 4 - index])
    );
  };
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

  // useEffect(() => {
  //   if(state.won){
  //     setTimeout(() => {
  //       setState(state => {
  //         return {...state, won: false}
  //       })
  //     }, 2000);
  //   }
  // }, [state.won])

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
