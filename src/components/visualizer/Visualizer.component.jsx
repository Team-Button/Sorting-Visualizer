import React from "react";
import Bar from "./Bar.component";
import { useSelector } from "react-redux";
import "./visualizer.css";

export default function Visualizer() {
  const { algorithm, speed, arraySize, array } = useSelector((state) => state);
  return (
    <div className="visualizerDiv" id="visualizer">
      {array.map((el, index) => (
        <Bar num={el} key={index} arraySize={arraySize} />
      ))}
    </div>
  );
}
