import GrandChild from "./GrandChild";
import "./styles.css";
import React from "react";

import { FamilyContext } from "./Context";

const Child = () => {
  const secret = React.useContext(FamilyContext);
  return (
    <div className="ChildClass">
      <p>Your parents are from {secret.Country}</p>
      <GrandChild />
    </div>
  );
};

export default Child;
