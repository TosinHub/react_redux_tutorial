import Color from "./Color";

import Font from "./Font";
import "./styles.css";
import React from "react";

const Canvas = () => {
  return (
    <div className="canvas">
      <Color />
      <Font />
    </div>
  );
};

export default Canvas;
