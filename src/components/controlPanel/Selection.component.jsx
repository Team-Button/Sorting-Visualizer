import React from "react";

const sortingType = [
  { sortType: "bubbleSort", name: "Bubble Sort" },
  { sortType: "quickSort", name: "Quick Sort" },
  { sortType: "mergeSort", name: "Merge Sort" },
];

/*
Receive setSortType props from index.jsx and pass the props up upon selecting
*/

export default function Selection({ config, setConfig }) {
  return (
    <>
      {sortingType.map((el) => {
        <h3
          id={el.sortType}
          onClick={() => setConfig({ ...config, sortType: el.sortType })}
        >
          {el.name}
        </h3>;
      })}
    </>
  );
}
