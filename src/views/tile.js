import React, { useEffect, useState, useContext } from "react";
import { WinnerContext } from "../context/winner.context";
import clsx from "clsx";

function Tile({ id, children, onToggle, isSet }) {
  const [flag, setFlag] = useState(false);
  const { winner } = useContext(WinnerContext);
  useEffect(() => {
    if (id === "12") {
      onToggle(id);
    }
  }, [id]);
  useEffect(() => {
    if (winner.includes(parseInt(id))) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }, [winner]);

  const handleClick = (id) => {
    if (id === "12") {
      return;
    }
    onToggle(id);
  };
  return (
    <div className='tile-outer'>
    <div
      onClick={() => handleClick(id)}
      className={clsx(
        `tile`,
        id !== "12" && flag && "highlighted"
      )}
    >
      {id === "12" ? (
        <div className={"bingo-title-12"}>{children}</div>
      ) : (
        <>
          <div className='bingo-base'>
            <span className='bingo-id'>{id}</span>
            <div
              className={`bingo-title ${
                isSet && id !== "12" ? "bingo-title-active" : ""
              }`}
            >
              {children}
            </div>
          </div>
        </>
      )}
    </div>
    </div>
  );
}

export default Tile;
