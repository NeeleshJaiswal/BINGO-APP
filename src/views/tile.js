import React, { useEffect } from "react";

function Tile({ id, children, onToggle, isSet }) {
  useEffect(() => {
    if (id === "12") {
      onToggle(id);
    }
  }, [id]);

  const handleClick = (id) => {
    if (id === "12") {
      return;
    }
    console.log(id);
    onToggle(id);
  };
  return (
    <div
      onClick={() => handleClick(id)}
      className={`tile ${isSet ? "tile--set" : ""}`}
    >
      {id === "12" ? (
        <div className={"bingo-title-12"}>{children}</div>
      ) : (
        <>
          <div>{id}</div>
          <div
            className={`bingo-title ${
              isSet && id !== "12" ? "bingo-title-active" : ""
            }`}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
}

export default Tile;
