import React, { useState } from "react";
import Selection from "./Selection.component";
import SpeedBar from "./SpeedBar.component";

export default function ControlPanel() {
  const [config, setConfig] = useState({
    sortType: null,
    arrayLength: null,
    speed: null,
  });

  const handleStart = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Selection config={config} setConfig={setConfig} />
      <SpeedBar config={config} setConfig={setConfig} />
      <StartButton handleStart={handleStart} />
    </>
  );
}
