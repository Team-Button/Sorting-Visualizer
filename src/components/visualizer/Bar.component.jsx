import React from "react";

export default function Bar({ arraySize, num }) {
  const barWidth = Math.floor(956 / (arraySize * 3));
  const barHeight = num * 30;
  console.log(num);
  return (
    <div
      className="bar"
      style={{
        width: `${barWidth}px`,
        height: `${barHeight}px`,
        backgroundColor: `pink`,
        fontSize: `10px`,
        margin: `5px`,
      }}
    ></div>
  );
}
