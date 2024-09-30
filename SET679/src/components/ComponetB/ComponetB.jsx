import React, { useContext } from "react";
import { handle } from "../ComponentA/ComponentA";

function ComponetB() {
  // const { handleClick } = props;
  const handleClick = useContext(handle);
  return (
    <div className="counter__B">
      <button className="button" onClick={handleClick()}>
        Click B
      </button>
    </div>
  );
}

export default ComponetB;
