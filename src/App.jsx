import React from "react";
import "./App.css";
import ControlPanel from "./components/controlPanel";
import Visualizer from "./components/visualizer/Visualizer.component";

function App() {
  return (
    <div className="App font-orbitron bg-black text-white">
      <ControlPanel />
      <Visualizer />
    </div>
  );
}

export default App;
