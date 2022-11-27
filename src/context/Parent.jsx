import Child from "./Child";
import "./styles.css";
import { useContext } from "react";
import { FamilyContext } from "./Context";

const Parent = () => {
  const secret = useContext(FamilyContext);
  console.log(secret);
  return (
    <div className="Parent">
      <p>The family name is {secret.FamilyName}</p>
      <Child />
    </div>
  );
};

export default Parent;
