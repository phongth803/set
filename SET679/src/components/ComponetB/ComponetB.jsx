import React, { useContext } from "react";
import { handle } from "../ComponentA/ComponentA";

function ComponetB(props) {
  const { handleClick } = props;
  // const theme = useContext(handle);
  // const handleClick = theme;
  return (
    <div className="counter__B">
      <button className="button" onClick={handleClick()}>
        Click B
      </button>
    </div>
  );
}

export default ComponetB;
