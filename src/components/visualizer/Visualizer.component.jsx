import React from "react";
import Bar from "./Bar.component";
import { useSelector } from "react-redux";
import "./visualizer.css";

function Visualizer() {
  const { config, sorting } = useSelector((state) => state);
  const { array, arraySize, speed } = config;
  const { mainArray, tempArray, animationsArray, colorPalette } = sorting;

  return (
    <div className="visualizerDiv" id="visualizer">
      {array.map((el, index) => {
        const barColor = colorPalette.mainColor;
        return (
          <Bar num={el} key={index} arraySize={arraySize} barColor={barColor} />
        );
      })}
    </div>
  );
}

export default Visualizer;
