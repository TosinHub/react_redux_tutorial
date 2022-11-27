import "./styles.css";
import Parent from "./context/Parent";
import { FamilyContext } from "./context/Context";
import Canvas from "./features/canvas/canvas";

const FamilySecret = {
  FamilyName: "Olugbenga",
  Country: "Nigeria"
};

export default function App() {
  return (
    <div className="App">
      <Canvas />
      <FamilyContext.Provider value={FamilySecret}>
        <Parent />
      </FamilyContext.Provider>
    </div>
  );
}
