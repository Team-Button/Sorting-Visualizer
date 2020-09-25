import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Selection from "./Selection.component";
import SpeedBar from "./SpeedBar.component";
import StartButton from "./StartButton.component";

export default function ControlPanel() {
  const [config, setConfig] = useState({
    algorithm: null,
    arrayLength: null,
    speed: null,
  });

  const dispatch = useDispatch();

  // pass to StartButton component, dispatch config state
  const handleStart = (e) => {
    e.preventDefault();
    dispatch();
  };
  return (
    <>
      <Selection config={config} setConfig={setConfig} />
      <SpeedBar config={config} setConfig={setConfig} />
      <StartButton handleStart={handleStart} />
    </>
  );
}
