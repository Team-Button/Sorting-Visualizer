import React from "react";
import "./App.css";
import ControlPanel from "./components/controlPanel";
import Visualizer from "./components/visualizer/Visualizer.component";

function App() {
  return (
    <div className="App">
      <ControlPanel />
      <Visualizer />
    </div>
  );
}

export default App;
