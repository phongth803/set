import React, { createContext } from "react";
import ComponetB from "../ComponetB/ComponetB";
import { useState } from "react";

// export const handle = createContext();

function ComponentA() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <>
      <div className="number">
        <h1>{counter}</h1>
      </div>
      {/* <handle.Provider value={handleClick}>
        <ComponetB />
      </handle.Provider> */}
      <ComponetB handleClick={handleClick} />
      <button className="button" onClick={handleClick()}>
        Click A
      </button>
    </>
  );
}

export default ComponentA;
