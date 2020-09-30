import React from "react";

export default function StartButton({ handleStart }) {
  return (
    <div id="startButtonDiv">
      <button
        className="btn-future-blue"
        id="startButton"
        onClick={handleStart}
      >
        Visualize this Algorithm
      </button>
    </div>
  );
}
