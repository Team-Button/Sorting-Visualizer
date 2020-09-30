import React, { useState } from "react";

export default function Bar({ arraySize, num, barColor }) {
  const barWidth = Math.floor(1024 / (arraySize * 3));
  const barHeight = num * 20;
  return (
    <div
      className="bar bg-future-blue text-black"
      style={{
        width: `${barWidth}px`,
        height: `${barHeight}px`,
        fontSize: `10px`,
        margin: `5px`,
      }}
    >
      {num}
    </div>
  );
}
